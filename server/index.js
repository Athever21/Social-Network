import express from "express";
import path from "path";
import mongoose from "mongoose";
import socketio from "socket.io";
import cluster from "cluster";
import { cpus } from "os";

import session from "express-session";
import helmet from "helmet";
import redis from "redis";
import redisConnect from "connect-redis";

import template from "../template";
import { port, mongo_uri, sess_secret } from "./config/config";
import handleError from "./utils/handleError";

import usersRouter from "./routes/users";
import authRouter from "./routes/auth";
import postsRouter from "./routes/posts";
import friendsRouter from "./routes/friends";
import notificationRouter from "./routes/notifiactions";
import commentsRouter from "./routes/comments";
import messageRouter from "./routes/message";
import adminRouter from "./routes/admin";

import socket from "./socket-io";
import redisAdapter from "socket.io-redis";
import { redis_url } from "./config/config";
import { URL } from "url";
import { url } from "inspector";

(async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
})();

let RedisStore = redisConnect(session);
let redisClient = redis.createClient({ url: redis_url });
redisClient.on("error", (message) => console.log(message));
const app = express();

app.enable("trust proxy");
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        connectSrc: ["http://localhost:3000", "http://localhost:85", "'self'"],
        defaultSrc: ["http://localhost:3000", "'self'"],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "unpkg.com",
          "cdn.jsdelivr.net",
          "fonts.googleapis.com",
          "use.fontawesome.com",
        ],
        scriptSrc: [
          "'self'",
          "js.stripe.com",
          process.env.NODE_ENV === "development" ? "'unsafe-eval'" : "",
        ],
        frameSrc: ["'self'", "js.stripe.com"],
        fontSrc: [
          "'self'",
          "fonts.googleapis.com",
          "fonts.gstatic.com",
          "use.fontawesome.com",
          "cdn.joinhoney.com",
        ],
        imgSrc: ["'self'", "data:"],
      },
    },
  })
);
app.use(
  session({
    secret: sess_secret,
    cookie: {
      httpOnly: true,
      // secure: true
      sameSite: true,
      maxAge: 600000,
    },
    store: new RedisStore({ client: redisClient, ttl: 86400 }),
    resave: false,
    saveUninitialized: false,
  })
);
if (process.env.NODE_ENV == "development") {
  require("./devBundle");
}

app.disable("x-powered-by");
app.use(express.json());
app.use("/dist", express.static(path.join(process.cwd(), "dist")));

app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/notif", notificationRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/message", messageRouter);
app.use("/api/admin", adminRouter);

app.get("*", async (req, res) => {
  return res.send(template());
});

app.use(handleError);

const r = redis_url.split(":");

const rp = r[r.length - 1];
const hr = r.filter((x) => x !== rp).join(":");
console.log(rp,hr);

if (cluster.isMaster) {
  for (let i = 0; i < cpus().length; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(process.pid);
  });

  const io = socketio(server);
  io.adapter(redisAdapter({ host: hr, port: rp }));
  socket(io);
}

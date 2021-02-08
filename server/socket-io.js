export default (io) => {
  io.on("connection", (socket) => {
    let u = null;

    socket.on("conn", (user) => {
      u = user;
      socket.join(user);
    });

    socket.on("sendChatMessage", (message, reciver, from) => {
      socket.to(reciver).emit("reciveChatMessage", from, message);
    });

    socket.on("addNotif", (notif, reciver, from) => {
      console.log("why?", notif, reciver);
      socket.to(reciver).emit("reciveNotif", notif, from);
    });

    socket.on("addedFriend", (reciver1, reciver2, user1, user2) => {
      socket.broadcast.to(reciver1).emit("newFriend", user2);
      socket.broadcast.to(reciver2).emit("newFriend", user1);
    });

    socket.on("disconn", () => {
      socket.leave(u);
    });
  });
};

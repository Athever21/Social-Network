require('dotenv').config();

export const port = process.env.PORT || 3000;
export const mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017/social";
export const sess_secret = process.env.SESS_SECRET || "secret";
export const google_private_key = process.env.GOOGLE_PRIVATE_KEY;
export const google_email = process.env.GOOGLE_EMAIL;
import {google} from 'googleapis';
import {google_private_key,google_email} from "./config/config";


const scopes = [
  'https://www.googleapis.com/auth/drive'
];

// const credentials = require('./config/credentials.json');

const auth = new google.auth.JWT(
  google_email,null,
  google_private_key,scopes
);

const drive = google.drive({
  version: "v3",
  auth
});

import {promisify} from 'util';

export const uploadAsync = promisify(drive.files.create).bind(drive);
export const showFilesAsync = promisify(drive.files.list).bind(drive);
export const deleteFileAsync = promisify(drive.files.delete).bind(drive);
export const getFileAsync = promisify(drive.files.get).bind(drive);

export default drive;
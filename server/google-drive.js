import {google} from 'googleapis';

const scopes = [
  'https://www.googleapis.com/auth/drive'
];

const credentials = require('./config/credentials.json');

const auth = new google.auth.JWT(
  credentials.client_email,null,
  credentials.private_key,scopes
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
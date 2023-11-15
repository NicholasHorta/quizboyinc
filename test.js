
import * as admin from 'firebase-admin';
import * as fs from 'fs';

// Step 1: Initialize Firebase Admin SDK.
const serviceAccount = require('/path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Step 2: Read the JSON file.
const jsonFilePath = '/path/to/json/file.json';
const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

// Step 3: Parse the JSON data into an object.
const jsonObject = JSON.parse(jsonData);

// Step 4: Upload the JSON object to Firestore.
const firestore = admin.firestore();
firestore.collection('collectionName').doc('documentName').set(jsonObject);

// Step 5: Log success message.
console.log('JSON file uploaded to Firestore successfully!');


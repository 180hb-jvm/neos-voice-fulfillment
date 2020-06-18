import * as functions from 'firebase-functions';
const admin = require('firebase-admin');

import { GoogleAccountFirebase } from './config/google-account'

admin.initializeApp({
    credential: admin.credential.cert(GoogleAccountFirebase),
    databaseURL: "https://firebase_project_url.firebaseio.com"
});

import {
    dialogflow,
} from 'actions-on-google';

import { INTENT_BUSINESS_CONTENT, INTENT_PERSONAL_CONTENT,INTENT_PRODUCT_CONTENT } from './config/intents'
import { contentBussinesHandler, contentPersonalHandler, contentProductHandler } from './handlers/contentIntentHandler'

const dialogFlowApp = dialogflow({});

dialogFlowApp.intent(INTENT_BUSINESS_CONTENT, contentBussinesHandler);
dialogFlowApp.intent(INTENT_PERSONAL_CONTENT, contentPersonalHandler);
dialogFlowApp.intent(INTENT_PRODUCT_CONTENT, contentProductHandler);

export const ContentHandlerDialogflow = functions.https.onRequest(dialogFlowApp);

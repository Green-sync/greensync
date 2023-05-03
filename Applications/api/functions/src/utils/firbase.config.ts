/**
 * manage firebase admin configuration
 */

import admin from "firebase-admin"

admin.initializeApp()


const db = admin.firestore();

export {db,admin}

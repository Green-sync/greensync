// /* eslint-disable valid-jsdoc */
// /* eslint-disable @typescript-eslint/ban-ts-comment */
// import { firestore } from "firebase-admin";
// import { db } from "../../../utils";
// ///import { ICollectionTypes } from "./UserDto";

// /**
//  * Common service
//  */
// export class CommonService {
//     /**
//        * Maps two colections based on content ids and field name
//        * @param {string} childId - The child collecion id
//        * @param {string} parentId - The parent collecion id
//        * @param {string} collection - Collection name
//        * @param {string} field - Collection name
//        */
//     static async generalCollectionMapper(childId: string, parentId: string, collection: string, field: string) {
//         try {
//             const parent = db.collection(collection).doc(parentId);
//             (await parent.get()).exists ? await parent.update({
//                 [field]: firestore.FieldValue.arrayUnion(childId),
//             }) : await parent.set({
//                 [field]: [childId],
//             });
//             return true;
//         } catch (e) {
//             return false;
//         }
//     }

//     static async mapCollections(parentId: string,
//         childId: string, collection?: ICollectionTypes):
//         Promise<boolean> {
//         try {
//             const userref = db.collection("Users").doc(childId as string);
//             switch (collection) {
//                 case "Farm":
//                     (await userref.get()).exists ?
//                         await userref.update({
//                             farmId: firestore.FieldValue.arrayUnion(parentId),
//                         }) :
//                         await userref.set({ farmId: [parentId] });
//                     break;
//                 case "Crop":
//                     (await userref.get()).exists ?
//                         await userref.update({ cropId: firestore.FieldValue.arrayUnion(parentId) }) :
//                         await userref.set({ cropId: [parentId] });

//                     break;
//                 case "Livestock":
//                     (await userref.get()).exists ?
//                         await userref.update({
//                             livestockId: firestore.FieldValue.arrayUnion(parentId),
//                         }) :
//                         await userref.set({ livestockId: [parentId] });
//                     break;
//                 case "Weather":
//                     (await userref.get()).exists ?
//                         await userref.update({
//                             experienceId:
//                                 firestore.FieldValue.arrayUnion(parentId),
//                         }) :
//                         await userref.set({ weatherId: [parentId] });
//                     break;
//                 case "Iotdevice":
//                     (await userref.get()).exists ?
//                         await userref.update({
//                             iotdeviceId: firestore.FieldValue.arrayUnion(parentId),
//                         }) :
//                         await userref.set({ iotdeviceId: [parentId] });
//                     break;
//                 default:
//                     break;
//             } // if it doesn't exist, create the document
//             return true;
//         } catch (error) {
//             return false;
//         }
//     }

//       /**
//        * Delete collection record based on content ids and field name
//        * @param {string} targetId - collection id
//        * @param {string} collection - Collection name
       
//        */

//     static async delete(collecion: string, targetId: string ) {
//         try {
//             await db.collection(collecion).doc(targetId).delete();
          
//           return {
//             message: "Record deleted successfully",
//             success: true,
//           };
//         } catch (error) {
//           return {
//             message: "Record could not be deleted",
//             success: false,
//           };
//         }
//       }
    



// }
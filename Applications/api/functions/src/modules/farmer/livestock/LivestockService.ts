import { db } from "../../../utils";

export class LivestockService {
     static async addStock(stock: any) {
    //     try {          
    //       await db.collection("Stock").add(stock)
    //       return {
    //         message: "Livestock details successfully added", success: true,
    //       };
    //     } catch (error) {
    //       return {
    //         message: `${error} failed to add Livestock details`, success: false,
    //       };
    //     }

    const livestockRef = await db.collection('Livestocks').add({
      ...stock,
      userId: "1d1d12345" //context.uid
    });
    // Return the newly created livestock with its ID
    return {
      message: "Livestock details successfully added", success: true,
      id: livestockRef.id, livestockRef
    };
  } catch(error: any) {
    return {
      message: `${error} failed to add livestock details`, success: false,
    };


    
       }

    

}
import { connect } from "mongoose";

export async function mongoDBConnect(MONGODB_URI : string){
    try {
        await connect(MONGODB_URI)
    } catch (error) {
        
    }

}
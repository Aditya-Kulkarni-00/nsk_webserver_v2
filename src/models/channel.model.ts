import { model, Schema , Document } from "mongoose";
import uuid4 from "uuid4";

interface Channel extends Document{
    name : string
    type : string
    address : number
    deviceId : string
    id : string // unique id used for OTSB buckets
}

const channelSchema = new Schema({
    name : {
        type : String
    },
    type : {
        type : String
    },
    address : {
        type : Number
    },
    deviceId : {
        type : String
    },
    id : {  
        type : String,
        default : uuid4
    }
})
const channelModel = model('Channels', channelSchema)

export default channelModel
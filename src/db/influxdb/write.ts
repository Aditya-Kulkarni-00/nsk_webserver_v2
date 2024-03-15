import { Point } from "@influxdata/influxdb-client"
import {  getClients } from "./connect"

export async function writePoint(id : string, value : unknown){
    const { writeClient } = await getClients()
    let point = new Point(id).floatField('value', value)
    writeClient.writePoint(point)
    writeClient.flush()
}
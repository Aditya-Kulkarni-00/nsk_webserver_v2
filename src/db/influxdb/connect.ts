import { InfluxDB } from "@influxdata/influxdb-client";

export async function getClients(){
    const token = process.env.INFLUXDB_TOKEN
    const url = 'http://localhost:8086'
    
    let org = `Projects`
    const bucket = `Nishko_v2`
    
    const client = new InfluxDB({url, token})
    
    const queryClient = client.getQueryApi(org)
    const writeClient = client.getWriteApi(org, bucket, 'ns')
    return {
        bucket,
        queryClient,
        writeClient
    }
}


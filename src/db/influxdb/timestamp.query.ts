import { getClients } from "./connect"

export async function readIntervalData(id : string , interval : string ){
    const { bucket , queryClient } = await getClients()
    let fluxQuery = `from(bucket: "${bucket}")
    |> range(start: -${interval})
    |> filter(fn: (r) => r._measurement == "${id}")
    `   

    return await queryClient.collectRows(fluxQuery)
}
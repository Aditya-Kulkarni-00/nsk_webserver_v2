import { getClients } from "./connect"

export async function readLatestData(id : string){
    const { bucket , queryClient } = await getClients()
    let fluxQuery = `from(bucket: "${bucket}")
    |> range(start: -10m)
    |> filter(fn: (r) => r._measurement == "${id}")
    |> last()`   

    return await queryClient.collectRows(fluxQuery)
}
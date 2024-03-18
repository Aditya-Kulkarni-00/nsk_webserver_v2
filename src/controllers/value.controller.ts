import { writePoint } from "@/db/influxdb/write";
import { Request , Response } from "express";
import { readLatestData } from '@/db/influxdb/latest.query'
import {readIntervalData} from '@/db/influxdb/timestamp.query'
// controller for adding new values

export const createValuePoints = async (req: Request<{},{},{id : string , value : number}>, res: Response) => {
    try {
      const { id , value } = req.body
      if(!id || !value){
        throw Error("Id and Value are required")
      }
      await writePoint(id , value)
      return res.status(201).json({id , value});
    } catch (error : any) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  export const getLatestValueById = async (req: Request<{id : string },{}, {}, {interval : string}>, res: Response) => {
    try {
      const {id} = req.params
      if(!req.query.interval){
          const data = await readLatestData(id)
         return res.json(data);
        }else{
         const data = await readIntervalData(id , req.query.interval)
        return res.json(data);
      }
    } catch (error : any) {
      return res.status(500).json({ message: error.message });
    }
  };
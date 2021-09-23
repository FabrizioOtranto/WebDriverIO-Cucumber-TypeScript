import fs  from 'fs'
import { DONWLOAD_FOLDER_PATH } from '../constants/pathconst'

export const ParseJSONFile = (datapath:string) =>{
    let data = fs.readFileSync(datapath, "utf-8")
    return JSON.parse(data)

    }

   export const deleteDirectory = (path: string) =>{
       if(fs.existsSync(DONWLOAD_FOLDER_PATH)){
        fs.rmdirSync(DONWLOAD_FOLDER_PATH, {recursive: true})
    }
}
import { Server } from "./servers";
import { User } from "./users";

export interface Session {
    id:number, 
    beginTime:string, 
    endTime:string, 
    serverId:Server['id'], 
    userId:User['id']};
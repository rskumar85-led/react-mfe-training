import { createContext } from "react";

const UserContext = createContext()

type User = {
    id:number,
    name:string,
    role:string,
    login:()=>{},
    logout:()=>{}
}
export default {User, UserContext}
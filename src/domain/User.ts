import { Trade } from "./Trade";

export interface User{
    id: number,
    username: string,
    name: string,
    trades: Trade[]
}
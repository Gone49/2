"use server";

import { RegisterInputProps } from "@/type/types";
import { error } from "console";


export async function createUser(data: RegisterInputProps) {
    try {

        throw new Error("Something went w")
       return data
      } catch (error) {

        return {
            error:"Something went wromg!"
        }
        
      }
    
}
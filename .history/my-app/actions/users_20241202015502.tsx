"use server";

import { RegisterInputProps } from "@/type/types";
import { error } from "console";


export async function createUser(data: RegisterInputProps) {
    try {

        throw new error
       return data
      } catch (error) {

        return {
            error:"Something went wromg!"
        }
        
      }
    
}
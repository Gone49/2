"use server";

import { RegisterInputProps } from "@/type/types";


export async function createUser(data: RegisterInputProps) {
    try {

        
       return data
      } catch (error) {

        return {
            error:"Something went wromg!"
        }
        
      }
    
}
"use server";

import { RegisterInputProps } from "@/type/types";
import { error } from "console";


export async function createUser(data: RegisterInputProps) {
    try {
          
        if(existingUser) {
            return Next
        }
        
        //Add that here
      } catch (error) {
         console.log(error)
        return {
            error:"Something went wromg!"
        }
        
      }
    
}
"use server";

import { RegisterInputProps } from "@/type/types";
import { error } from "console";
import { NextResponse } from "next/server";


export async function createUser(data: RegisterInputProps) {
    try {
          
        if(existingUser) {
            return NextResponse.json
            {
                data: null,
                message:`User with this Email (${email}) already exists`
            }
            {satus}
        }
        
        //Add that here
      } catch (error) {
         console.log(error)
        return {
            error:"Something went wromg!"
        }
        
      }
    
}

import RegisterPage from '@/components/Auth/RegisterPage'
import { UserRole } from '@prisma/client'
import React from 'react'

export default function RegisterForm() {
  return (
    <div  className="mt-" >
    <RegisterPage role={'ADMIN'} /></div>
  )
}



import Register from '@/components/Auth/Register'
import RegisterPage from '@/components/Auth/RegisterPage'
import { UserRole } from '@prisma/client'
import React from 'react'

export default function RegisterForm() {
  return (
    <div>
    <Register role={'USER'}/></div>
  )
}

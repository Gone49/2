export type ServiceProps= {tittle: string ,image:string ,slug:string}

// type/register.d.ts (or any file you choose)

export interface RegisterProps {
    name: string;
    email: string;
    role: "doctor" | "patient" | "Admin"; // You can restrict the role to these two values
    password: string;
    confirmPassword: string;
  }
  
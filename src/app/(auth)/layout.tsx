import { ReactNode } from "react"

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center bg-red-400">
      {children}
    </div>
  )
}

export default AuthLayout

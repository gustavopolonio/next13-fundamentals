type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">Logo do app</h1>
      {children}
    </div>
  )
}

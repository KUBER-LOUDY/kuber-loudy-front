import { signIn } from "@/app/api/route"

export default function DashboardPage({ params }:any) {
 

    return (
      <h1 className="text-3xl text-black pb-6">{params.member} Dashboard</h1>
    )
  }

DashboardPage

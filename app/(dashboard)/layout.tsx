import type { Metadata } from "next"
import "@/app/globals.css";
import { Html } from "next/document";

export const metadata: Metadata ={
    viewport : 'width=device-width, initial-scale=1.0',
    title : 'Admin'
}

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang = "en">
        <body className="bg-gray-100 flex flex-row">
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl ">
                <div className="p-6">
                    <a href="dashboard/blank.tsx" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">admin</a>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3"></i>새 Iam 계정
                        </button>
                </div>
                    <nav className="text-white text-base font-semibold pt-3">
                        <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </a>
                        <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-sticky-note mr-3"></i>
                            Blank Page
                        </a>
                        <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Tables
                        </a>
                        <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-align-left mr-3"></i>
                            Forms
                        </a>
                        <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Tabbed Content
                        </a>
                        <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-calendar mr-3"></i>
                            Calendar
                        </a>
                    </nav>
                        <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                        <i className="fas fa-arrow-circle-up mr-3"></i>
                        Upgrade to Pro!
                        </a>
            </aside>
                
            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    <div x-data = "{ isOpen : false }" className="relative w-1/2 flex justify-end">
                        <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                            <img src = "https://source.unsplash.com/uJ8LNVCBjFQ/400x400">
                            </img>
                        </button> 
                    </div>
                </header>

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                        {children}


                    </main>
                    <footer className="w-full bg-white text-right p-4">
                       Team <a target="_blank" href="https://github.com/KUBER-LOUDY" className="underline">CloudyDay</a>
                    </footer>
                </div>
                   
            </div>
                
                
        </body>
        </html>
    )
  }
import type { Metadata } from "next"
import "@/app/globals.css";

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

            <body className="bg-gray-100 flex">
                <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl ">
                    <div className="p-6">
                        <a href="dashboard/blank.tsx" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">admin</a>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3"></i> new report
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
                
            
                <section>
                    {
                        /* Include shared UI here e.g. a header or sidebar */
        
                    }
                    <nav className="text-white text-base font-semibold pt-3">
                        <a href="dashboard/blank.tsx" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Dashboard
                        </a>
                    </nav>
   
                    {/* 이하 고유 페이지의 UI 출력 */}
                    {children}
                </section>
            </body>
        </html>
    )
  }
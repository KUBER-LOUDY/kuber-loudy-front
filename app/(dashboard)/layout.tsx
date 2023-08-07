export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <body className="bg-gray-100 flex">
            
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl ">
            <div className="p-6">
                <a href="dashboard/blank.tsx" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">admin</a>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <i className="fas fa-plus mr-3"></i> new report
                </button>
            </div>
        </aside>
        <section>
            {
        
        /* Include shared UI here e.g. a header or sidebar */
        
        
            }
            <nav className="text-white text-base font-semibold pt-3">
                <a href="dashboard/boardMain.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i className="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
            </nav>
   
            {children}
        </section>
        </body>
    )
  }
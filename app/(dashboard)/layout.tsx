import type { Metadata } from "next";
import "@/app/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  title: "Admin",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gray-100 font-family-karla flex">
          {/* 사이드 */}
          <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl ">
            {/* 새 iam 계정 버튼 */}
            <div className="p-6">
              <Link
                href="/iam/list"
                className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
              >
                admin
              </Link>
              <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i>
                새 Iam 계정
              </button>
            </div>

            {/* 사이드 메뉴 */}
            <nav className="text-white text-base font-semibold pt-3">
              <Link
                href="/dashboard/main"
                className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
              >
                <i className="fas fa-tachometer-alt mr-3"></i>
                대쉬보드
              </Link>
              <Link
                href="/dashboard/ec2"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
              >
                <i className="fas fa-sticky-note mr-3"></i>
                ec2 상태
              </Link>
              <Link
                href="/dashboard/kuber"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
              >
                <i className="fas fa-align-left mr-3"></i>
                Kubernetes 상태
              </Link>
              <Link
                href="/dashboard/tutorials"
                className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
              >
                <i className="fas fa-tablet-alt mr-3"></i>
                Tutorials
              </Link>
            </nav>

            {/* 사이드 하단메뉴 */}
            <Link
              href="https://accordions.co.kr"
              className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
            >
              <i className="fas fa-arrow-circle-up mr-3"></i>
              Upgrade to Accordian!
            </Link>
          </aside>

          {/* 우측 화면 */}
          <div className="w-full flex flex-col h-screen overflow-y-hidden">
            <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
              <div className="w-1/2"></div>
              <div
                x-data="{ isOpen : false }"
                className="relative w-1/2 flex justify-end"
              >
                <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                  <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400"></img>
                </button>
              </div>
            </header>

            <div className="w-full overflow-x-hidden border-t flex flex-col">
              <main className="w-full flex-grow p-6">{children}</main>
              <footer className="w-full bg-white text-right p-4">
                Team
                <Link
                  target="_blank"
                  href="https://github.com/KUBER-LOUDY"
                  className="underline"
                >
                  CloudyDay
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

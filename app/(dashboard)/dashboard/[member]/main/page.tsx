import { signIn } from "@/app/api/route";

export default function DashboardPage({ params }: any) {
  return (
    <main className="w-full flex-grow p-6">
      <h1 className="text-3xl text-black pb-6">{params.member} Dashboard</h1>
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-list mr-3"></i> 저장된 IAM 목록
      </p>
      <div className="bg-white overflow-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                IAM user
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                마지막 로그인
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                활성화 여부
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="w-1/3 text-left py-3 px-4">Lian</td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500">jonsmith@mail.com</a>
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="w-1/3 text-left py-3 px-4">Emma</td>

              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500">622322662</a>
              </td>
              <td className="text-left py-3 px-4">
                <a className="hover:text-blue-500">jonsmith@mail.com</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

DashboardPage;

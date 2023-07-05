import "@/app/globals.css";
import { Button, HighlightedButton } from "@/components/common/button";

/**
 * 랜딩 페이지 컴포넌트
 *
 */
export default function LandingPage() {
  return (
    <main className="w-full bg-gray-100 h-full">
      <div className="flex px-20 py-10 justfiy-center h-full bg-gray-100 sm:flex-row flex-col w-full">
        <LandingTitle />
        <LogInForm />
      </div>
    </main>
  );
}

const LandingTitle = () => {
  return (
    <div className="mx-auto p-10 w-full sm:py-10 align-middle ">
      <div className="relative w-full bg-cover">
        <div className="relative sm:py-48 py-24 flex flex-col justify-center h-full items-start space-y-8 tracking-tight">
          <div className="relative">
            <p className="mb-2 font-medium text-gray-700 uppercase">
              Work smarter
            </p>
            <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
              Features to help you work smarter
            </h2>
          </div>
          <p className="text-2xl text-gray-700">
            We've created a simple formula to follow in order to gain more out
            of your business and your application.
          </p>
          <a
            href="#_"
            className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
            data-primary="blue-600"
            data-rounded="rounded-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

const LogInForm = () => {
  return (
    <div className="mx-10 sm:w-3/4 sm:my-10 bg-white rounded-lg">
      <div
        className="flex flex-col items-start justify-start w-full
        p-10 lg:p-16 xl:p-24"
      >
        <h3 className="w-full text-3xl font-bold mb-4">Sign Up</h3>
        <HighlightedButton />
        <Button />
      </div>
    </div>
  );
};

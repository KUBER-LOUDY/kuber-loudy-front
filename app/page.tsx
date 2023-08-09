"use client";
import "@/app/globals.css";
import {
  Button,
  LoginButton,
} from "@/components/common/button";
import { EmailInput, PasswordInput } from "@/components/common/input";
import { useEffect, useState } from "react";

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
              Kuber-Loudy
            </p>
            <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl break-keep">
              버튼 하나로 시작하는 Kubernetes
            </h2>
          </div>
          <p className="text-2xl text-gray-700">
            K8S 어플리케이션을 처음 시작하는 당신을 위한 안내서
          </p>
          <a
            href="#_"
            className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
            data-primary="blue-600"
            data-rounded="rounded-lg"
          >
            오늘 시작하기
          </a>
        </div>
      </div>
    </div>
  );
};

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  const data = {
    email: email,
    password: password,
  };

useEffect(()=>{
console.log(email)
},[email])

  return (
    <div className="mx-10 sm:w-3/4 sm:my-10 bg-white rounded-lg">
      <div
        className="flex flex-col items-start justify-start w-full
        p-10 lg:p-16 xl:p-24"
      >
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcom Back!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              소셜 로그인으로 로그인하기
            </p>
          </div>

          <div className="flex flex-row justify-center items-center space-x-3">
            <a
              href=""
              target="_blank"
              className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   
              navericon hover:shadow-lg cursor-pointer transition ease-in duration-300"
            />
            {/* <img
              className="w-4 h-4"
              src=""
            /> */}

            <a
              href=""
              target="_blank"
              className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
            />
            {/* <img
              className="w-4 h-4"
              src=""
            /> */}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-16 bg-gray-200"></span>
            <span className="text-gray-300 font-normal">or continue with</span>
            <span className="h-px w-16 bg-gray-200"></span>
          </div>
        </div>

        <p className="mt-6 text-left px-1 text-sm text-gray-600">이메일</p>
        <EmailInput event={onEmailChange}/>
        <p className="px-1 text-sm text-gray-600">비밀번호</p>
        <PasswordInput event={onPasswordChange}/>

        {/*4. login ok => url mapping => dashboard page */}

        <div className="mt-6"></div>
        <LoginButton text="로그인" request={data} />
        <Button text="회원가입" />
      </div>
    </div>
  );
};

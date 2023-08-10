"use client";
import { SignInButton } from "@/components/common/button";
import { EmailInput, NameInput, PasswordInput } from "@/components/common/input";
import { useState } from "react";

export default function SignInPage(){
    return(
        <main className="w-full bg-gray-100 h-full">
        <div className="flex px-20 py-10 justfiy-center h-full bg-gray-100 sm:flex-row flex-col w-full">
            <LandingTitle></LandingTitle>
            <LogInForm></LogInForm>
        </div>
      </main>
      
    )
}SignInPage

export const LandingTitle = () => {
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
            <p
              className="inline-block px-8 py-5 text-xl font-medium text-center text-gray-100 transition duration-200 bg-gray-100 rounded-lg hover:bg-gray-100 ease"
            >
              한 스텝 남았습니다!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export const LogInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    
    function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value);
    }
  
    function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
      setPassword(e.target.value);
    }

    function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
      }

    const signInData = {
      email : email,
      password :password,
      name : name,
      provider : ""
    }
  
    return (
      <div className="mx-10 sm:w-3/4 sm:my-10 bg-white rounded-lg">
        <div
          className="flex flex-col items-start justify-start w-full
          p-10 lg:p-16 xl:p-24"
        >
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                회원 가입
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                정보를 입력해 주세요
              </p>
            </div>
  
    
            <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-300 font-normal">-</span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div>
          </div>
  
          <p className="mt-6 text-left px-1 text-sm text-gray-600">이메일</p>
          <EmailInput event={onEmailChange}/>
          <p className="px-1 text-sm text-gray-600">비밀번호</p>
          <PasswordInput event={onPasswordChange}/>
          <p className="px-1 text-sm text-gray-600">이름</p>
          <NameInput event={onNameChange} />
          <div className="mt-6"></div>
            
        <SignInButton text="시작하기" request={signInData}></SignInButton>

        </div>
      </div>
    );
  };
  
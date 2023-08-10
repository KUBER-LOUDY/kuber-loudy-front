import { login,signIn } from "@/app/api/route";
import Link from "next/link";


interface textInfo {
  text : string;

}

interface logininfo {
  text : string;
  request : object;
}


const HighlightedButton = ({text} : textInfo) => {
  return (
    <div className="w-full">
      <button
        type="submit"
        className="
        text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md
        text-white bg-blue-600
        hover:bg-blue-800 hover:shadow-lg
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
      >
        {text}
      </button>
    </div>
  );
};

const Button =({text} : textInfo) => {
  return (
    <Link href="/signin" className="text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    text-blue-600 bg-white
    hover:bg-gray-100
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
    > {text}</Link>
  );
};

const LoginButton = ({text, request} : logininfo) => {

  return (
    <div className="w-full">
      <button
        type="submit"
        className="
        text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md
        text-white bg-blue-600
        hover:bg-blue-800 hover:shadow-lg
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring--green-700"
        onClick={()=>login(request
          ).then(()=>{location.href="/dashboard/member/main"
        console.log('실행됨')})}  
      >
        {text}
      </button>
    </div>
  );
};


const SignInButton =({text, request} : logininfo) => {
  return (
      <Link href="/" className="text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
        text-blue-600 bg-white
        hover:bg-gray-100
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
        onClick={()=>signIn(request
          ).then(()=>alert("회원 가입이 완료되었습니다"))}  
        > {text}</Link>
  );
};

export { Button, HighlightedButton, LoginButton, SignInButton };

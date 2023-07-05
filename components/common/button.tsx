import {
  FormEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

const HighlightedButton = () => {
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
        하이라이트 버튼
      </button>
    </div>
  );
};

const Button = () => {
  return (
    <div className="w-full">
      <button
        type="submit"
        className="
        text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
        text-blue-600 bg-white
        hover:bg-gray-100
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      >
        일반 버튼
      </button>
    </div>
  );
};

export { Button, HighlightedButton };

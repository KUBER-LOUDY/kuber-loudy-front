interface textInfo {
  text : string;
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
    <div className="w-full">
      <button
        type="submit"
        className="
        text-center w-full py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
        text-blue-600 bg-white
        hover:bg-gray-100
        focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      >
       {text}
      </button>
    </div>
  );
};

export { Button, HighlightedButton };

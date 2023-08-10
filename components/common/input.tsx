
interface InputChange{
  event : React.ChangeEventHandler<HTMLInputElement>
}


const EmailInput = ({event}:InputChange) => {
  return (
    <input
      className="
      text-left w-full px-3 py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    bg-white
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      placeholder="mail4you@gmail.com"
      type="email"
      name="email"
      onChange={event}
    ></input>
  );
};

const PasswordInput = ({event}:InputChange) => {
  return (
    <input
      className="
      text-left w-full px-3 py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    bg-white
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      placeholder="******"
      type="password"
      name="password"
      onChange={event}
    ></input>
  );
};


const NameInput = ({event}:InputChange) => {
  return (
    <input
      className="
      text-left w-full px-3 py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    bg-white
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      placeholder="유갑수"
      name="MemberName"
      onChange={event}
    ></input>
  );
};


export { EmailInput, PasswordInput,NameInput };

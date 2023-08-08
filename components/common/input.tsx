const EmailInput = () => {
  return (
    <input
      className="
      text-left w-full px-3 py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    bg-white
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      placeholder="mail4you@gmail.com"
      type="email"
      name="email"
    ></input>
  );
};

const PasswordInput = () => {
  return (
    <input
      className="
      text-left w-full px-3 py-3 my-2 text-sm font-medium leading-4 rounded-md border border-gray-300
    bg-white
    focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2"
      placeholder="******"
      type="password"
      name="email"
    ></input>
  );
};

export { EmailInput, PasswordInput };

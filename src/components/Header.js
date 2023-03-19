import logo from "../assets/Logo.png"

const Header = () => {
  return (
    <header className="flex items-center w-[90%] md:w-[80%] mx-auto my-4 z-10 relative">
      <img src={logo} alt="logo" className="hidden md:block h-[42px] mr-auto" />
      <ul className="flex justify-between w-[200px] mr-auto md:mr-2">
        <li>Product</li>
        <li>Services</li>
        <li>About</li>
      </ul>
      <button className="ml-4 bg-[white] text-[black] font-bold w-[128px] h-10 py-2 px-10 rounded-[24px]">
        Log In
      </button>
    </header>
  );
};

export default Header;

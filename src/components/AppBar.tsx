import logo from '../assets/logo.svg';


function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="flex flex-row items-center space-x-2">
        <img src={logo} className="h-6 rounded-sm" alt="Logo" />
        <div className="text-lg font-semibold">REACHINBOX</div>
      </div>
    </div>
  );
}

export default AppBar;

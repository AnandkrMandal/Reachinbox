import  {useEffect} from "react";
import {Link, redirect, useNavigate } from "react-router-dom"; 
import AppBar from "../components/AppBar";
import google from "../assets/google.svg";
import Footer from "../components/Footer";

function Login() {
    const Navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    if(token){
        redirect('/')
    }
    if(!token){
      redirect('/login')
  }
  const redirectUri =import.meta.env.VITE_CLIENT_URL; 
  const apiUri = `${import.meta.env.VITE_GOOGLE_URI}${redirectUri}`
 
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      sessionStorage.setItem("token", `Bearer ${token}`);
      Navigate("/dashboard"); 
    }
  }, [Navigate]);

  return (
    <div>
      <AppBar />
      <div className=" min-h-screen flex-grow flex items-center justify-center bg-black dark:bg-black">
          <div className="bg-[#111214] p-8 rounded-xl shadow-lg max-w-md h-80 w-full border border-gray-600">
            <h4 className="text-xl font-bold text-center text-white mb-6">
              Create a new Account
            </h4>
            <form className="space-y-4">
              <div>
                <Link to={apiUri}
                  aria-label="Sign in with Google"
                  className="flex items-center w-full bg-transparent border border-gray-600 rounded-md mx-auto"
                >
                  <div className="flex items-center justify-center mx-auto h-12 rounded-l">
                    <img src={google} alt="google" className="w-5 mr-1"></img>
                    <span className="pl-2 text-lg text-center text-white">
                      Sign in with Google
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-48 mt-10 bg-gradient-to-r from-blue-500 to-blue-900 hover:bg-blue-600 text-white font-semibold py-3 rounded-sm"
                >
                  Create an Account
                </button>
              </div>
            </form>
            <p className="text-center text-gray-400 mt-6">
              Don’t have an account?{" "}
              <Link to="#" className="text-gray-100 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Login;

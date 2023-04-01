import Input from "@/components/input";
import { useCallback, useState } from "react";
import axios from 'axios'
import {signIn} from 'next-auth/react';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa'
 
const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter()

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async() => {
    try {
      await signIn('credentials',{
        email,
        password,
        // redirect:false,
        callbackUrl:'/profile'
      });
      // router.push('/')
    } catch (error) {
      console.log(error)
    }

  },[email, password])


  const register = useCallback(async() => {
    try {
      await axios.post('/api/register',{
        email,
        name,
        password
      });
      login()
     
    } catch (error) {
      console.log(error)
    }
  },[email, name, password,login])

 
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "register" ?   " Register ":"Sign In"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  value={name}
                  type="text"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                  label="UserName"
                />
              )}

              <Input
                id="email"
                value={email}
                type="email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                label="Email"
              />
              <Input
                id="password"
                value={password}
                type="password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                label="Password"
              />
              <button onClick={ variant === 'login' ? login : register} className=" rounded-md bg-red-600 hover:bg-red-700 text-white py-3 w-full transition">
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <div className="flex items-center justify-center gap-4 mt-8">

                <div 
                 onClick={() => signIn('google',{ callbackUrl:'/profile'})}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center
                 cursor-pointer hover:opacity-80 transition
                ">
                  <FcGoogle size={30}/>
                </div>
                <div
                onClick={() => signIn('github', { callbackUrl:"/profile" } )}
                className="w-10 h-10 cursor-pointer hover:opacity-80 transition bg-white rounded-full flex items-center justify-center">
                  <FaGithub size={30}/>
                </div>
              </div>
              <p className=" text-neutral-500 mt-12">
                {
                    variant === "login" ? "First Time using Netflix?":"Already have an account"
                }
                
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                    {
                        variant === "login" ? "Create an Acount":"Login"
                    }
                  
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

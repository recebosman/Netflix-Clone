import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const image =
    "https://assets.nflxext.com/ffe/siteui/vlv3/afc06103-4d6a-4236-b496-34b671a7e9ba/9113685f-6ea0-4b91-bbe3-024e6ffeaac8/TR-tr-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  return (
    <div
      className="min-w-screen min-h-screen bg-cover object-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="w-32 cursor-pointer pt-2 ml-4 "
      />
      <div className="flex justify-center  items-center">
        <div className="w-[425px] h-[1077px]  rounded-3xl flex  justify-center items-center">
          <div className="w-full h-[560px] bg-[#00000099] flex flex-col rounded-lg justify-center items-center">
            <h1 className="text-4xl text-white font-bold">Sign In</h1>
            <form
              className="w-full h-[400px] flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Email or phone number"
                className="w-[300px] h-[50px] rounded-lg bg-[#333333] text-white p-6 mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password "
                className="w-[300px] h-[50px] rounded-lg bg-[#333333] text-white p-6 mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-[#e50914] text-white font-bold w-[300px] h-[50px] rounded-lg mt-4">
                Sıgn In
              </button>
              <h1 className="text-white text-sm mt-4">
                New to Netflix?
                <span
                  className="text-[#e50914] cursor-pointer ml-2"
                  onClick={() => navigate("/signup")}
                >
                  Sign up now.
                </span>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

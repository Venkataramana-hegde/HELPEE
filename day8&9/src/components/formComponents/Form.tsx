import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";
import { useState, type FormEvent } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../features/userSlice";
 
interface LoginForm {
  email: string;
  password: string;
}

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log({user})
  // const [password, setPassword] = useState("");
  const [eye, setEye] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validEmail: string = "venkat@gmail.com";
    const password: string = "12345";
    if(formData.email !== validEmail && formData.password != password){
      toast.error("Invalid credentials")
      return;
    }

    dispatch(
      // login({
      //   email: formData.email,
      //   password: formData.password,
      // })
      login({formData})
    )
    setTimeout(() => {
            return navigate("/home");
      }, 1000);
    toast.success("Successful login")
    console.log(formData);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-[20px]">
        <p className="text-4xl mb-[10px] font-bold">Welcome Back</p>
        <p className="text-gray-600 text-[14px]">
          Enter your email and password to access your account
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label className=" text-[14px]" htmlFor="email">
            Email:
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            className="border border-gray-400 rounded-[5px] w-full mb-[12px] h-[30px] pl-[5px]"
            type="email"
            id="email"
            name="email"
            placeholder="sellstore@company.com"
          />
          <br />
          {/* <label className="text-[14px]" htmlFor="password">
            Password:
          </label>
          
            <input
            className="border border-gray-400 rounded-[5px] w-full"
            type="password"
            id="password"
            name="password"
          /> */}
          {/* <i className="fa fa-solid fa-eye cursor-pointer" id="togglePassword" ></i> */}
          <div className="Password inputWrapper">
            <label className="text-[14px]" htmlFor="password">
              Password:
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              className="border border-gray-400 rounded-[5px] w-full h-[30px] pl-[5px]"
              type={eye ? "password" : "text"}
              id="password"
              name="password"
            />
            {eye ? (
              <i
                className="far fa-eye"
                id="togglePassword"
                onClick={() => setEye(!eye)}
              ></i>
            ) : (
              <i
                className="far fa-eye-slash"
                id="togglePassword"
                onClick={() => setEye(!eye)}
              ></i>
            )}
          </div>
          <br />

          <div className="flex justify-between mb-[10px]">
            <div className="flex items-center justify-center ">
              <input
                className="mr-[2px]"
                type="checkbox"
                id="checkbox"
                name="checkbox"
              />
              <label className=" text-[14px] text-gray-600" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <button className="text-blue-900 text-[14px] font-medium">
              Forgot your password?
            </button>
          </div>

          <button className="w-[350px] h-[30px] bg-blue-800 text-white rounded-[3px]">
            Log In
          </button>
        </form>
        <p className="otherLogin text-[14px] mb-[12px] text-gray-600">
          Or login with
        </p>
        <div className="flex">
          <button className=" mr-[5px] flex items-center justify-center w-[170px] h-[30px] border border-gray-400 rounded-[3px]">
            <span>
              <img
                className="w-[15px] mr-[2px]"
                src={Google}
                alt="Logo of Google"
              />
            </span>
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center w-[170px] h-[30px] border rounded-[3px] border-gray-400">
            <span>
              <img
                className="w-[14px] mr-[2px]"
                src={Apple}
                alt="Logo of apple"
              />
            </span>
            <span>Apple</span>
          </button>
        </div>
        <p className="text-[14px] my-[15px] text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-900 font-medium">Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Form;

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import logins from "../../../assets/login.json";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const { handleCreateUser, handleGoogle, updateUser } =
  useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const from = location.state?.from?.pathname || "/";

  if (navigation.state === "loading") {
    return <p>Loading</p>;
  }

  const handleGooglebtn = () => {
    handleGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        toast.warning("Login Unccessfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setError(error.message);
        console.log(error.message);
      });
  };

  const handleRegbtns = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (
      !/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)
    ) {
      setError("Password Validation not match!!");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(name, photoUrl)
          .then((result) => {
            const user = result.user
            console.log("user name Updated",user);
          })
          .catch((error) => {
            setError(error.message);
            console.log(error.message);
          });
        toast.success("Register Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        toast.warning("Register Unccessfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setError(error.message);
        console.log(error.message);
      });
  };
  return (
    <form onSubmit={handleRegbtns}>
      <div className="">
        <div className="hero-content mt-3">
          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
              <Lottie animationData={logins} loop={true} />
            </div>
          </div>
          <div>
            <div className="text-center mb-4 lg:text-left">
              <h1 className="text-5xl font-bold text-[#142850] pb-2">
                Please Register Here !!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{show ? "Hide" : "Show"}</span>
                    <div onClick={() => setShow(!show)}>
                      {show ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary text-white">Register</button>
              </div>
              <div>
                <p className="p-2">
                  <small>
                    Already have an account?{" "}
                    <Link className="link link-primary" to="/login">
                      Login here
                    </Link>
                  </small>
                </p>
              </div>
              <div className="divider">O</div>
              <div className="text-center space-x-2">
                <button
                  onClick={handleGooglebtn}
                  className="btn btn-circle btn-outline"
                >
                  <FcGoogle size="2em"/>
                </button>
                <button
                //   onClick={handleGoogle}
                  className="btn btn-circle btn-outline"
                >
                  <BsGithub size="2em"/>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

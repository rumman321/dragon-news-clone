import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {userSignIn}=useContext(AuthContext)
  const handleSubmit=(e)=>{

    e.preventDefault()
    const form= new FormData(e.target)
    const email=form.get("email")
    const password=form.get("password")
    console.log(email,password)

    userSignIn(email,password
      .then(result=>{
        const user=result.user
        console.log(user)
      })
      .catch(error=> console.log("ERROR ", error.message))
    )
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Don't have an account ? <Link className="text-red-600" to="/auth/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

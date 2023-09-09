import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import FormImg from "../../assets/images/managepic.jpg";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {db} from "../../firebase.config";
import { toast } from "react-toastify";
const Login = ({ onSubmit, isLoading }) => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;
  const navigate = useNavigate();
  const SubmitHandler = async(data) => {
      try {
          const auth = getAuth();
          const userCredential  = signInWithEmailAndPassword(auth , data.email , data.password);
          if(auth.currentUser){
              toast.success("login suceess");
              navigate("/profile")
          } 
      } catch (error) {
          toast.error(error);
          console.log(error)
      }
  };

  return (
    <div className={classes.form}>
      <img src={FormImg} alt="form img" />
      <div className={classes.form__content}>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          {/* <img src={FormLogo} alt="logo" /> */}
          <h4>Welcome back</h4>
          <h2>Login to your account</h2>
          <div className={classes.form__action}>
            <label htmlFor="email">Email </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "This field is required" },
              })}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <div className={classes.form__action}>
            <label htmlFor="Password">Password </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "This field is required" },
              })}
            />
            <span className="error">{errors.password?.message} </span>
          </div>
          <button type="sumbit">Login</button>
          <p
            className={classes.sign__in}
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Sign up
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
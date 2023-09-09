import React, { useState } from "react";
import classes from "./Signup.module.css";
import LoginImg from "../../assets/images/managepic.jpg";
import { getAuth, createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {db} from "../../firebase.config";
import { useForm, Controller } from "react-hook-form";
import {doc , setDoc ,serverTimestamp} from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const form = useForm();
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  

  const sumbitHandler = async(regData) => {

    try { 
      const auth = getAuth();
      const userCredntial = await createUserWithEmailAndPassword(auth , regData.email , regData.password);
      const user = userCredntial.user;
      updateProfile(auth.currentUser , {
        displayName: regData.username
      });
      const formDataCopy = {...regData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
       await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/");
      toast.success("Sign up Sucess ");
      
    } catch (error) {
        console.log(error);
        toast.error("Error in Credntial")
    }
  };
  
  return (
    <div className={classes.regform}>
      <img src={LoginImg} alt="logo" className={classes.LoginImg} />
      <div className={classes.regform__content}>
        <form onSubmit={handleSubmit(sumbitHandler)}>
         
          <h2>Create account</h2>
         
          <div className={classes.form__action}>
            <label htmlFor="username">User Name </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your User Name"
              {...register("username", {
                required: { value: true, message: "This field is required" },
              })}
            />
            <span className="error">{errors.username?.message}</span>
          </div>
          <div className={classes.form__action}>
            <label htmlFor="email">Email </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email", {
                required: { value: true, message: "This field is required" },
              })}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <div className={classes.form__action}>
            <label htmlFor="password">Password </label>
            <input
              id="password"
              type="password"
              placeholder="Create password"
              {...register("password", {
                required: { value: true, message: "This field is required" },
              })}
            />
            <span className="error">{errors.password?.message} </span>
          </div>
          
          <button type="submit" >Create Account</button>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Login{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
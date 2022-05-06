import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { login } from "../Redux/Auth/actions";
import { Navigate } from "react-router-dom";

export default function Login() {
   const dispatch = useDispatch();
   const isAuth = useSelector((store) => store.auth.isAuth);
   localStorage.setItem("authState", isAuth);

   const [formData, setFormData] = useState({
      email: null,
      password: null,
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const loginFn = (e) => {
      e.preventDefault();
      //   console.log(e);
      axios
         .post("https://reqres.in/api/login", {
            email: formData.email,
            password: formData.password,
         })
         .then((response) => {
            localStorage.setItem("token", response.data.token);
            dispatch(login());
            return <Navigate to={"/"} />;
         })
         .catch((e) => {
            alert("Wrong email or password");
         });
   };
   return (
      <>
         <input
            type="text"
            name="email"
            placeholder="Enter email..."
            onChange={handleChange}
         />
         <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
         />
         <input type="submit" value="Login" onClick={loginFn} />
      </>
   );
}

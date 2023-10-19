import Button from "./button";
import TextField from "./textField";
import { auth, provider } from "../config/googleSign";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export default function SignForm({ formSubmitHandler }) {
  const [value, setValue] = useState("");
  const clickLoginGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
      <p className="text-center text-3xl">Welcome.</p>
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={formSubmitHandler}>
        <TextField
          label="Email"
          idLabel="email"
          fieldType="email"
          placeholder="your@email.com here"
        />
        <TextField
          label="Password"
          idLabel="password"
          fieldType="password"
          placeholder="Password here"
        />

        <input
          type="submit"
          value="Log In"
          className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        />
        <p>Other Methode</p>
      </form>
      {/* button login here */}

      {value ? (
        <>
          <p>anda sudah login</p>
          <p>{value}</p>
          <Button
            clickHandler={() => {
              localStorage.clear();
              window.location.reload();
            }}
            btnLabel={"logout"}
            btnClass={""}
          />
        </>
      ) : (
        <Button
          clickHandler={clickLoginGoogle}
          btnLabel={"Login With google"}
          btnClass={""}
        />
      )}
      <div className="text-center pt-12 pb-12">
        <p>
          Don't have an account?{" "}
          <a href="register.html" className="underline font-semibold">
            Register here.
          </a>
        </p>
      </div>
    </div>
  );
}

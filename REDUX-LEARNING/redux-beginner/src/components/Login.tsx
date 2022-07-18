import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/User";

export interface LoginProp {}

export const Login: FC<LoginProp> = ({}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Uzair", age: 22, email: "uzair@gmail.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
};

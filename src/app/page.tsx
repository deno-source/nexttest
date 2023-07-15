"use client";

import { useDispatch } from "react-redux";
import { AppDispath, useAppSelector } from "../store/store";
import { change } from "../store/features/auth-slice";

function HomePage() {
  const userName = useAppSelector((state) => state.authReducer.value.name);
  const dispatch = useDispatch<AppDispath>();
  return (
    <div
      onClick={() => {
        dispatch(change("我是home"));
      }}
    >
      home-{userName}
    </div>
  );
}

export default HomePage;

"use client";
import { useAppSelector } from "@/src/store/store";

export default function Index() {
  const userName = useAppSelector((state) => state.authReducer.value.name);
  return <div>page1-{userName}</div>;
}

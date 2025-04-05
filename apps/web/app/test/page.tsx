"use client";
import { useSession } from "next-auth/react";

export default function Test() {
  const { data: session } = useSession();
  console.log(session);
  return <div>{session?.user?.name}</div>;
}

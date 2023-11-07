'use client'
import UserContext from "@/context/userContext";
import { useContext } from "react";
import LoadingBar from "react-top-loading-bar";

export default function Home() {
  const context = useContext(UserContext)
  const {progress} = context

  return (
    <>
    <div className="">
    <LoadingBar transitionTime='500' progress={progress} color='red' loaderSpeed='1000' height='3px' />
    </div>
    </>
    
  )
}

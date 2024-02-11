"use client"

import {useSearchParams } from "next/navigation";
import {useWindowY} from "@/hooks/useWindowY"
import { AuthForm } from "./AuthForm";
import React, { ElementRef, useEffect, useRef } from 'react'
import { twMerge } from "tailwind-merge";

const AuthRender = () => {
    const searchParams = useSearchParams();
    const register = searchParams?.get("register")
    const dialogRef = useRef<ElementRef<"dialog">>(null);
    
    useEffect(() => {
        const dialog = dialogRef.current;
        if (register && dialog) {
          dialog.showModal();
        }
      }, [register]);

  return (
    <dialog ref={dialogRef} >
        {register && <AuthForm />}
    </dialog>
  )
}

export default AuthRender
"use client";

import { useRecoilState } from "recoil";
import { useEffect } from "react";

import { StyleType } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import { StandardButton } from "./Buttons";


export default function StyleSelector() {

    const [type, setType] = useRecoilState<StyleType>(styleTypeAtom);

    if (typeof window !== 'undefined') {
        if (!sessionStorage.getItem('style')) {
            sessionStorage.setItem('style', 'clean');
            setType("clean");
        };
    };

    const handleClick = (style: StyleType) => {
        sessionStorage.setItem('style', style);
        setType(style);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setType((sessionStorage.getItem('style') as StyleType) || "clean");
        }
    }, [])    

    return (
        <div className="grid grid-cols-2 sm:flex justify-center w-max md:w-[650px] mx-auto h-32 sm:h-16 gap-x-4 gap-y-2 sm:justify-between sm:gap-16 items-center">
            <StandardButton text={"clean"} handleClick={() => handleClick("clean")}  />
            <StandardButton text={"brutal"} handleClick={() => handleClick("brutal")}  />
            <StandardButton text={"night"} handleClick={() => handleClick("night")} />
            <StandardButton text={"glass"} handleClick={() => handleClick("glass")} />
        </div>
    );
};
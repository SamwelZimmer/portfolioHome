"use client";
import Link from "next/link";

import StyleSelector from "../components/StyleSelector";
import { useRecoilState } from "recoil";

import { StyleType } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";

type HeroStyleDefinition = {
    [key in StyleType]: string;
};
  
const styles: {
    section: HeroStyleDefinition;
    h1: HeroStyleDefinition;
    h2: HeroStyleDefinition;
} = {

    "section": {
        "clean": "bg-white",
        "night": "bg-slate-900",
        "glass": "bg-purple-700",
        "brutal": `bg-white`,
    },

    "h1": {
        "clean": "",
        "night": "text-white",
        "glass": "text-white/80",
        "brutal": ``,
    },

    "h2": {
        "clean": "",
        "night": "text-gray-400",
        "glass": "text-white/60",
        "brutal": ``,
    },
};

export default function Hero() {

    const [type, _] = useRecoilState(styleTypeAtom);

    return (
        <section className={`${styles.section[type]} w-screen h-screen flex flex-col justify-center`}>
          <div className='flex flex-col px-4 gap-8 w-full md:px-0 md:w-[650px] mx-auto text-center md:text-left'>
            <h1 className={`${styles.h1[type]} text-3xl sm:text-5xl font-semibold`}>I wasn{"'"}t sure<br/> what style to use. <br /> So, I{"'"}ll let you choose.</h1>
            <h2 className={`${styles.h2[type]} font-medium`}>Anyway... I{"'"}m Samwel</h2>
          </div>

          <div className='px-4 py-12'>
            <StyleSelector />
          </div>

          <div>
            <Link className='underline hover:opacity-50' href={"https://projects.samwelzimmer.com/"}>Projects</Link>
          </div>

          <div>
            <Link className='underline hover:opacity-50' href={"/playground"}>Playground</Link>
          </div>

          <div>
            <Link className='underline hover:opacity-50' href={"https://masters.samwelzimmer.com/"}>Master{"'"}s Thesis</Link>
          </div>
        </section>
    );
}
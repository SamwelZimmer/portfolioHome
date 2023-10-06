"use client";
import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";

import StyleSelector from "../components/StyleSelector";
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
        "brutal": `bg-violet-300`,
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
        <section className={`${styles.section[type]} relative overflow-hidden w-screen h-screen flex flex-col justify-center`}>
          <div className='relative flex flex-col px-4 gap-8 w-full md:px-0 md:w-[650px] mx-auto text-center md:text-left'>

            <Image className="absolute -top-64 -right-20 md:-right-10" src="/brutal_graphics/brutal-quad-1.svg" alt="brutal circle asset" width={200} height={300} />


            <h1 className={`${styles.h1[type]} z-10 text-3xl sm:text-5xl font-semibold`}>I wasn{"'"}t sure<br/> what style to use. <br /> So, I{"'"}ll let you choose.</h1>
            <h2 className={`${styles.h2[type]} z-10 font-medium`}>Anyway... I{"'"}m Samwel</h2>
          </div>

          <div className='relative py-12 z-0'>
            <div className="z-10 absolute w-full ">
              <StyleSelector />
            </div>

            <Image className="absolute z-0 -top-32 -right-20 md:-right-10" src="/brutal_graphics/brutal-semi-circle.svg" alt="brutal circle asset" width={150} height={300} />

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

          <Image className="absolute -top-12 -left-20" src="/brutal_graphics/brutal-circle.svg" alt="brutal circle asset" width={300} height={300} />
          <Image className="absolute z-0 top-[70%] left-[10%]" src="/brutal_graphics/brutal-triangle.svg" alt="brutal circle asset" width={150} height={150} />
        </section>
    );
};

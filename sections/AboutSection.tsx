"use client";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { openInNewTab } from "../lib/helpers";

import { StyleType, Directions } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import './styles.css';

type HeroStyleDefinition = {
    [key in StyleType]: string;
};
  
const styles: {
    section: HeroStyleDefinition;
    card: HeroStyleDefinition;
    heading: HeroStyleDefinition;
    text: HeroStyleDefinition;
} = {

    "section": {
        "clean": "bg-black",
        "night": "bg-background-night",
        "glass": "bg-blue-800 pt-64",
        "brutal": `bg-pink-100`,
    },

    "card": {
        "clean": "",
        "night": "bg-secondary-night",
        "glass": "backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl",
        "brutal": "bg-green-200 border-black border-4 text-black brutal-shadow",
    },

    "heading": {
        "clean": "text-white",
        "night": "text-text-night",
        "glass": "text-white/80",
        "brutal": "",
    },

    "text": {
        "clean": "text-white/70",
        "night": "text-text-night/70",
        "glass": "text-white/70",
        "brutal": "",
    },
};

export default function AboutSection() {

    const [type, _] = useRecoilState(styleTypeAtom);

    return (
        <section className={`${styles.section[type]} relative w-full mx-auto flex flex-col px-8 py-32 z-0`} >

            { type === "glass" && <div className="absolute top-0 left-0 w-full h-32 bg-white bg-gradient-to-t from-white/0 to-white z-10 shadow-2xl" />}

            <div className={`${styles.card[type]} w-full md:w-[600px] mx-auto flex flex-col gap-4 p-8`}>
                <h1 className={`${styles.heading[type]} text-3xl sm:text-5xl font-semibold`}>Who Am I?</h1>
                <p className={`${styles.text[type]}`} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad itaque voluptates totam ipsum minus beatae dolorum saepe impedit quod magnam?</p>
                <p className={`${styles.text[type]}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora, autem ipsam, cupiditate dicta itaque accusantium nesciunt nostrum magnam explicabo iusto commodi quo! Officiis atque, reprehenderit vero, iste animi iusto recusandae ut architecto repudiandae repellat, laudantium quod? Consectetur autem atque illum inventore, quis qui quas accusamus ipsa, est maxime nihil?</p>
            </div>
        </section>
    );
};
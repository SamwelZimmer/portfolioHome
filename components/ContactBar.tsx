"use client";

import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { openInNewTab } from "../lib/helpers";
import { StyleType } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import './styles.css';

type ContactBarStyleDefinition = {
    [key in StyleType]: string;
};

const styles: {
    background: ContactBarStyleDefinition;
    iconButton: ContactBarStyleDefinition;
    } = {
    "background": {
        "clean": "bg-black border-black text-white",
        "night": "bg-secondary-night border-secondary-night text-white",
        "glass": "bg-white border-white",
        "brutal": "bg-green-200 border-black text-black",
    },
    "iconButton": {
        "clean": "",
        "night": "",
        "glass": "glass-btn rounded-md text-black/70",
        "brutal": "border-black border-2 bg-[#A6FAFF] hover:bg-[#79F7FF] active:bg-[#53f2fc]",
    }
};

export default function ContactBar() {
    const [type, _] = useRecoilState(styleTypeAtom);

    return (
        <div className={`${styles.background[type]} w-full flex flex-row gap-8 sm:gap-16 items-center justify-center py-12 border-y-4`}>
            <ContactButton icon={<AiFillLinkedin size={40} />} url={"https://www.linkedin.com/in/sam-harris-0503831bb"} type={type} />           
            <ContactButton icon={<AiOutlineGithub size={40} />} url={"https://github.com/samwelzimmer"} type={type} />
            <ContactButton icon={<AiOutlineTwitter size={40} />} url={"https://twitter.com/SamwelZimmer"} type={type} />
        </div>
    );
};

interface ContactButtonProps {
    type: StyleType;
    icon: ReactElement;
    url: string;
}

const ContactButton = ({ icon, url, type }: ContactButtonProps ) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => openInNewTab(url)}
            className={`${styles.iconButton[type]} ${(type === "brutal" && isHovered) && "brutal-shadow" } p-2`}
        >
            {icon}

        </motion.button>
    );
}
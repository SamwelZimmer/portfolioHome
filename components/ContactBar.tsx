"use client";

import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";

import { openInNewTab } from "../lib/helpers";
import { StyleType } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";

type ContactBarStyleDefinition = {
    [key in StyleType]: string;
};

const styles: {
    background: ContactBarStyleDefinition;
    } = {
    "background": {
        "clean": "bg-black border-black text-white",
        "night": "bg-slate-800 border-slate-800 text-white",
        "glass": "bg-pink-200 border-pink-200",
        "brutal": "bg-pink-300 border-black text-black",
    },
};

export default function ContactBar() {
    const [type, _] = useRecoilState(styleTypeAtom);

    return (
        <div className={`${styles.background[type]} w-full flex flex-row gap-8 sm:gap-16 items-center justify-center py-12 border-y-4`}>
            <ContactButton icon={<AiFillLinkedin size={40} />} url={"https://www.linkedin.com/in/sam-harris-0503831bb"} />           
            <ContactButton icon={<AiOutlineGithub size={40} />} url={"https://github.com/samwelzimmer"} />
            <ContactButton icon={<AiOutlineTwitter size={40} />} url={"https://twitter.com/SamwelZimmer"} />
        </div>
    );
};

interface ContactButtonProps {
    icon: ReactElement;
    url: string;
}

const ContactButton = ({ icon, url }: ContactButtonProps ) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => openInNewTab(url)}
        >
            {icon}

        </motion.button>
    );
}
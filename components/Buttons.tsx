"use client";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { StyleType } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";

type StandardButtonStyleDefinition = {
    [key in StyleType]: string;
};

const styles: {
    btn: StandardButtonStyleDefinition;
    } = {
    "btn": {
        "clean": "bg-white border rounded-lg shadow-md hover:border-black my-1 py-3",
        "night": "bg-slate-800 border-slate-800 rounded-lg text-white my-1 py-3",
        "glass": "glass-button text-white/80 border border-black/10 rounded-lg my-1 py-3",
        "brutal": `bg-yellow-400 border-black border-2 text-black rounded-full px-8 font-semibold brutal-shadow hover:bg-pink-300 m-0`,
    },
};

interface StandardButtonProps {
    text: string;
    handleClick: () => void;
    width?: number;
    height?: number;
};

export const StandardButton = ({ text, handleClick, width, height }: StandardButtonProps) => {

    const [type, _] = useRecoilState(styleTypeAtom);

    const optionalStyles = {
        ...width && { width },
        ...height && { height }
    };

    return (
        <motion.button
            style={optionalStyles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick} 
            className={`${styles.btn[type]} py-4 px-6 border font-medium h-min`}
        >
            {text}
        </motion.button>
    );
};
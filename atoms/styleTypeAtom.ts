import { atom } from "recoil";

import { StyleType } from "../lib/types";

export const styleTypeAtom = atom<StyleType>({
    key: "styleTypeAtom",
    default: "clean",
});
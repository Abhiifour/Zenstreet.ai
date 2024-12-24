"use client";

import { useThemeState } from "@/store/formState";
import { Switch } from "@/components/ui/switch"


export default function Header() {

    const themeState = useThemeState((state : any) => state.theme);
    const setTheme = useThemeState((state : any) => state.setTheme)

    return (<div className="flex justify-between px-[100px] py-4 leading-[25px] font-bold font-mono  text-[20px] pb-4 bg-primaryy sm:leading-none sm:px-4 sm:w-full" style={{color: themeState ? "black" : "gray", backgroundColor: themeState ? "white" : "black"}}>
       <div className="sm:text-[16px]">MULTI STEP FORM</div>
       <div onClick={() => setTheme(!themeState)} className="text-[16px] sm:text-[12px] flex items-center gap-2 cursor-pointer">
              <Switch style={{ backgroundColor: themeState ? "" : "gray"}}/> {themeState ? "Dark" : "Light"}
       </div>
    </div>)
}
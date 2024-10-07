import { useState } from "react";
import LanguageSwitcherChild from "./LanguageSwitcherChild"

export default function LanguageSwitcherParent() {
    const [lang , setLang] = useState('ARABIC')
    const onLanguageChange = (value) =>{
        switch (value) {
            case 'AR':
                setLang('ARABIC')
                break;
            case 'FR':
                setLang('FRANCAIS')
                break;
            case 'ANG':
                    setLang('ANGLAIS')
                break;
            default:
                break;
        }
    }
    return <div className="container text-center">
        <LanguageSwitcherChild onLanguageChange={onLanguageChange}/>
        <div>
            {lang}
        </div>
    </div>
}
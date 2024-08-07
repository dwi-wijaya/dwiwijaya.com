import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from "react";

const LanguageToggle = () => {
    const { locale, push, pathname, asPath, query } = useRouter();
    const [language, setLanguage] = useState(locale);

    const toggleLanguage = () => {
        const newLanguage = language === "id" ? "en" : "id";
        setLanguage(newLanguage);
        push({ pathname, query }, asPath, { locale: newLanguage });
    };

    return (
        <div className="w-full p-1 bg-background rounded-2xl border border-stroke">
            <label className="relative flex h-10 items-center cursor-pointer">
                <input
                    data-umami-event={`Switch to ${language === "en" ? "id" : "en"} Mode`}
                    type="checkbox"
                    className="sr-only peer"
                    checked={language === "en"}
                    onChange={toggleLanguage}
                />
                <div className="slider bg-background peer-checked:bg-background grid grid-cols-2 rounded-2xl justify-between items-center w-full h-full transition-all duration-300 relative">
                    <span
                        className={`absolute left-0 w-1/2 h-full bg-container border border-stroke rounded-xl transition-all duration-300 transform ${language === "en" ? 'translate-x-full' : ''}`}
                        style={{ content: '""', zIndex: 1 }}
                    />
                    <p className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 ${language == 'id' ? '!text-slate-800 dark:!text-slate-300' : ''}`}>
                        <i className="fa-duotone fal-xl fa-solid fa-language"></i>ID
                    </p>
                    <p className={`z-10 p-3 justify-center leading-4 flex items-center gap-2 text-slate-500 ${language == 'en' ? '!text-slate-800 dark:!text-slate-300' : ''}`}>
                        <i className="fa-duotone fal-xl fa-solid fa-language"></i>EN
                    </p>
                </div>
            </label>
        </div>
    );
};

export default LanguageToggle;

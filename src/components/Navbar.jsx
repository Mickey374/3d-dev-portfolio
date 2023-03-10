import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import i18n from "i18next";
// import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { useTranslation, initReactI18next } from "react-i18next";
import { styles } from "../styles";
import { navLinks, Languages } from "../constants/constants";
import { logoBrand, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectedLang, setSelectedLang] = useState('');

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoBrand} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white flex font-bold text-[18px] cursor-pointer">
            Asante&nbsp;<span className="sm:block hidden"> | Michael</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white cursor-pointer text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <select 
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}>
            {Languages.map((lang) => (
              <option key={lang.id}>{lang.name}</option>
            ))}
          </select> 
            
        </ul>
        <div className="sm:hidden justify-end flex flex-1 items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } my-2 p-6 black-gradient absolute top-20 mx-4 min-w-[140px] z-10 rounded-xl right-0`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

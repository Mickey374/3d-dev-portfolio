import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full py-5 z-20 bg-primary`}
    >
      <div className="mx-auto py-3 mt-3 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-medium mb-4">Need me Urgently</h3>
          <a href="https://wa.me/393299474126" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 flex items-center hover:bg-green-600 text-white font-bold py-3 px-4 rounded-3xl">
              <FaWhatsapp className="mr-2" />
              CHAT ON WHATSAPP
            </button>
          </a>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul>
            <li className='m-100'><a href="#about" className="text-secondary font-semibold hover:text-white cursor-pointer">About Me</a></li>
            <li><a href="#work" className="text-secondary font-semibold hover:text-white cursor-pointer">Work Experience</a></li>
            <li><a href="#projects" className="text-secondary font-semibold hover:text-white cursor-pointer">My Projects</a></li>
            <li><a href="#contact" className="text-secondary font-semibold hover:text-white cursor-pointer">Contact Me</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Connect with Me</h3>
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/AsanteMickey" target={"_blank"} className="text-secondary hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/Mickey374" target={"_blank"} className="text-secondary hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/michael-asante-483334b7/" target={"_blank"} className="text-secondary hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@techtitbits" target={"_blank"} className="text-secondary hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray-500 font-medium text-center mt-5 pb-5">MICHAEL ASANTE @ ALL RIGHTS RESERVED</p>
    </footer>
  )
}

export default Footer;
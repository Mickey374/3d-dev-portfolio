import React from 'react';
import { SectionWrapper } from '../hoc';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { styles } from "../styles";

const Footer = () => {
  return (
    
      <div className="mx-auto py-8 mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h3 className="text-lg font-medium mb-4">More About me</h3>
          <p className="text-secondary">Still not satisfied about hiring me for the job, check out some of my social media links and see some great works I am still doing.</p>
        </div>
        <div className="">
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul>
            <li className='m-100'><a href="#about" className="text-secondary font-semibold hover:text-white cursor-pointer">About Me</a></li>
            <li><a href="#work" className="text-secondary font-semibold hover:text-white cursor-pointer">Work Experience</a></li>
            <li><a href="#projects" className="text-secondary font-semibold hover:text-white cursor-pointer">My Projects</a></li>
            <li><a href="#contact" className="text-secondary font-semibold hover:text-white cursor-pointer">Contact Me</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-medium mb-4">Connect with Me</h3>
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/AsanteMickey" target={"_blank"} className="text-secondary hover:text-white">
            <FaTwitter size={24}/>
            </a>
            <a href="https://github.com/Mickey374" target={"_blank"} className="text-secondary hover:text-white">
            <FaGithub size={24}/>
            </a>
            <a href="https://www.linkedin.com/in/michael-asante-483334b7/" target={"_blank"} className="text-secondary hover:text-white">
            <FaLinkedin size={24}/>
            </a>
            <a href="https://www.youtube.com/@techtitbits" target={"_blank"} className="text-secondary hover:text-white">
            <FaYoutube size={24}/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default SectionWrapper(Footer, '');
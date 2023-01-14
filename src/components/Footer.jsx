import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi";

function Footer(){
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/chanchals7/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/ChanchalS7",
        },
        {
          id: 3,
          child: (
            <>
              <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:chsverma7@gmail.com",
        },
        {
          id: 5,
          child: (
            <>
               <FaTwitter size={30} />
            </>
          ),
          href: "https://twitter.com/Chanchal_S7",
          style: "rounded-br-md",
        },
      ];
    return(
        <div
        name="footer"
        className="text-center p-6 bg-slate footer"
      >
        <div className="inline-grid grid-cols-4 gap-6">
        {links.map(({ id, child, href }) => (
          <div
            key={id}
            
          >
            <a
              href={href}
            >
              {child}
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-5">
      <p className="">
      <FiPhoneCall size="30"/>
        
      </p>
      <p>8770516540</p>
      </div>
      <div className="flex items-center justify-center mt-5 gap-5">
          <p><HiOutlineMail size={30}/></p>
          <p className="oldstyle-nums">chsverma7@gmail.com</p>
          </div>
        </div>
    
    )
}


export default Footer
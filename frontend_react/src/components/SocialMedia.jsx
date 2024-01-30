import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
             <FaLinkedin />
        </div>
        <div>
             <FaGithub />
        </div>
        <div>
            <SiGeeksforgeeks />
        </div>
        <div>
            <SiLeetcode />
        </div>
    </div>
  )
}

export default SocialMedia
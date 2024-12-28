import React from 'react';
import { IoMailSharp } from "react-icons/io5";
import { FaDev, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';
const SocilLink = () => {
    return (
      <>
        {/* mail */}
        <Link
          className="text-6xl"
          to="#"
          onClick={() => {
            window.open(
              "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@engrsakib.com",
              "_blank"
            );
          }}
        >
          <IoMailSharp />
        </Link>
        {/* mail */}
        {/* linkdIn */}
        <Link
          className="text-6xl"
          to={`https://www.linkedin.com/in/engrsakib/`}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        {/* linkdIn */}
        {/* Facebook */}
        <Link
          className="text-6xl"
          to={`https://www.facebook.com/engrsakib02/`}
          target="_blank"
        >
          <FaSquareFacebook />
        </Link>
        {/* Facebook */}

        {/* whatsapps */}
        <Link
          className="text-6xl"
          to={`https://api.whatsapp.com/send/?phone=%2B8801992547202&text&type=phone_number&app_absent=0`}
          target="_blank"
        >
          <FaWhatsappSquare />
        </Link>
        {/* whatsapps */}

        {/* github */}
        <Link
          className="text-6xl"
          to={`https://github.com/engrsakib`}
          target="_blank"
        >
          <FaGithub />
        </Link>
        {/* github */}

        {/* devto */}
        <Link
          className="text-6xl"
          to={`https://dev.to/engrsakib`}
          target="_blank"
        >
          <FaDev />
        </Link>
        {/* devto */}

        {/* leetcode */}
        <Link
          className="text-6xl"
          to={`https://leetcode.com/engrsakib/`}
          target="_blank"
        >
          <SiLeetcode />
        </Link>
        {/* leetcode */}

        {/* codeforce */}
        <Link
          className="text-6xl"
          to={`https://codeforces.com/profile/engrsakib`}
          target="_blank"
        >
          {" "}
          <SiCodeforces />{" "}
        </Link>
        {/* codeforce */}
      </>
    );
};

export default SocilLink;
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/129972847?s=400&u=3331fa349dd6c62f11fdd7ea44877739688527c2&v=4"}
          alt="Founder"
        />

        <h2>Arnab Kumar Hansda</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/arnab-kumar-hansda-732540202" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/arnab_kumar_121/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Arnab012" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

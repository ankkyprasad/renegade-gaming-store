import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Foot = () => {
  return (
    <footer>
      <section>
        <h5>copyright &copy;</h5>
        <ul>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Foot;

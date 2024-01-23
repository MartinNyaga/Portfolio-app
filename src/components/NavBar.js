import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function NavBar(){
    return(<nav>
        <ul>
          <li>
            <ScrollLink to="/" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contacts" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>)
};

export default NavBar;
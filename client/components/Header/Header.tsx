import React from "react";
import Image from 'next/image'
import { Theme } from "../../contexts/ThemeContext";

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

const Header: React.FC = () => {
  const { darkTheme, toggleDarkTheme } = React.useContext(Theme)
  return (
    <header>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/67976310?s=400&v=4"
          alt="Logo"
          width={'100%'}
          height={'100%'}
          objectFit="contain"
        />
        <p>TxGO</p>
      </div>

      <nav >
        <ul>
          <li>Home</li>
          <li>Transferir</li>
          <li>Transacciones</li>
        </ul>
        <button onClick={toggleDarkTheme}>{darkTheme ? <MdOutlineDarkMode color="white" /> : <MdOutlineLightMode />}</button>
      </nav>

      <style jsx>{`
        header { 
          background: var(--${darkTheme ? 'navbarBkgColor' : 'navbarBkgColorDark'});
          color: var(--${darkTheme ? 'fontColor' : 'fontColorDark'});
        }
        
        div {
          display: flex;
          height: 100%;
        }

        div img {
          max-width: 3rem;
          max-height: 100%;
        }

        nav {
          display: flex;
          align-items: center;
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0 1rem;
          padding: 0;
        }

        li {
          padding: 0.5rem;
          border-radius: var(--borderRadius);
          cursor: pointer;
          transition: all calc(var(--animationTime) *0.2) ease-in-out;
        }
        li:hover {
          background-color: var(--${darkTheme ? 'navHoverColor' : 'navHoverColorDark'});
          color:            var(--${darkTheme ? 'fontColorDark' : 'fontColor'});
        }
        li:active {
          transform: scale(0.95);
        }

        button {
          display: grid;
          place-items: center;

          background: var(--${darkTheme ? 'fontColor' : 'fontColorDark'});
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          border: 1px solid  var(--${darkTheme ? 'navbarBkgColorDark' : 'navbarBkgColor'});
        }

      `}</style>
    </header>
  )
}

export default Header
import React from "react";
import { Theme } from "../../contexts/ThemeContext";

const Footer: React.FC = () => {
  const { darkTheme } = React.useContext(Theme);

  return (
    <footer>
      <b>
        Footer
      </b>

      <style jsx>{`
        footer {
          background: var(--${darkTheme ? "navbarBkgColor" : "navbarBkgColorDark"});
          color: var(--${darkTheme ? "fontColor" : "fontColorDark"});
        }
      `}</style>
    </footer>
  )
}

export default Footer
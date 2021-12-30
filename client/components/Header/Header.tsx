import React from "react";
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="header">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      header

    </header>
  )
}

export default Header
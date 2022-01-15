import React from 'react'
import Image from 'next/image'

const Loader: React.FC = () => (
  <div>
    <Image src='/Pulse-2.4s-800px.svg' alt='Cargando...' draggable='false' layout='fill' objectFit='contain' />

    <style jsx>{`
    div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: hsla(0, 0%, 100%, 0.5);

      display: grid;
      place-items: center;
    }

    span, img {
      max-width: 60%  !important;
      max-height: 50% !important;
    }
  `}</style>
  </div>
)

export default Loader
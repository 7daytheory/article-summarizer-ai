import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center flex-col">
            <img src={logo} alt="SumZ Logo" className="w-28 object-contain" />

            <button
                type="button"
                onClick={() => window.open('https://github.com/7daytheory/custom-ai')}
                className="black_btn"
                >
                Github
            </button>
        </nav>
    </header>
  )
}

export default Hero
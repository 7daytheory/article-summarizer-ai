import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center  w-full mb-10 pt-3">
            <img src={logo} alt="SumZ Logo" className="w-28 object-contain" />

            <button
                type="button"
                onClick={() => window.open('https://github.com/7daytheory/custom-ai')}
                className="black_btn"
                >
                Github
            </button>
        </nav>

        <h1 className="head_text">
            Summarize Articles with <br className="max-md:hidden" />
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
            <strong>Simplify and summarize articles.</strong> Copy and paste an article link and this will summarize the article using open-source software.
        </h2>
    </header>
  )
}

export default Hero
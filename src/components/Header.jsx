import React from 'react'
import { logo } from '../assets';

const Header = () => {
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
            Summarize Articles <br className="max-md:hidden" />
            <span className="orange_gradient">Using OpenAI</span>
        </h1>
        <h2 className="desc">
            <strong>Simplify and summarize articles.</strong> Copy and paste an article link and it will return a summary of the article using open-source AI software.
        </h2>
        <p className="italic flex justify-center mt-2 text-sm">* Not all webpages will work due to unclear text formatting.</p>
    </header>
  )
}

export default Header
import React from 'react'

import { useState, useEffect } from 'react'

import {copy, linkIcon, loader, tick} from '../assets'

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
        {/* Search */}
        <div className="flex flex-col w-full gap-2">
            <form
                className="relative flex justify-center items-center"
                onSubmit={() => {}}
            >
                <img 
                    src={linkIcon}
                    className="absolute left-0 ml-3 w-5 my-2"
                />
                <input
                    type="url"
                    placeholder="Enter a URL"
                    value=""
                    onChange={() => {}}
                    required
                    className="url_input peer"
                />
            </form>
        </div>
    </section>
  )
}

export default Demo
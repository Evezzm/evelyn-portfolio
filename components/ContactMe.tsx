import React from 'react'
import { motion } from "framer-motion";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl justify-center mx-auto items-center px-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3> 

        <div className='flex flex-col space-y-10'>
            <h4  className='text-3xl font-semibold text-center'>
                I have got just what you need. 
            <span className="underline decoration-[#F7AB0A]/50"> Lets Talk.</span>

            </h4>
        </div>
    </div>
  )
}

export default ContactMe
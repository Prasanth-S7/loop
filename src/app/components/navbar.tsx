'use client'
import React, { useState } from "react";

async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>, word: string, complete: any){
    if(e.key === "Enter"){
        await complete(JSON.stringify({
            word: word
        }))
    }
}

export default function Navbar({ complete, word, setWord }: {complete: any, word: string, setWord: React.Dispatch<React.SetStateAction<string>>}) {
    return(
        <nav className="w-full flex justify-between items-center">
          <input
            value={word}
            type="text"
            className="h-10 px-0 py-2 w-60 border-b border-white/20 focus:outline-0 focus:ring-0"
            placeholder="Search"
            onChange = {(e) => setWord(e.target.value)}
            onKeyDown={(e) => onKeyDown(e, word, complete)}
          />
          <div>
            <span>Loop</span>
          </div>
        </nav>
    )
}
'use client'
import Navbar from "./navbar";
import Content from "./content";
import { useCompletion } from "@ai-sdk/react";
import { useState } from "react";

export default function Hero() {
    const [word, setWord] = useState("")
    const { completion, complete } = useCompletion({
        api: "/api/gemini",
    })
    return (
        <>
            <Navbar complete = {complete} word = {word} setWord = {setWord} />  
                <div className="flex justify-center">
                    <div className="mt-10">
                        AM I IN A LOOP?
                    </div>
                </div>
            <Content complete = {complete} completion = {completion} setWord={setWord}/>
        </>
    )
}
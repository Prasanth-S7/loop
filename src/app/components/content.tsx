'use client'
import { useState, useEffect } from "react"
export default function Content({ completion, complete, setWord }: { completion: any, complete: any, setWord: React.Dispatch<React.SetStateAction<string>> }) {
    const [words, setWords] = useState([])
    useEffect(() => {
        if(completion){
            const splittedWords = completion.split(" ")
            setWords(splittedWords)
        }
    }, [completion])
    return (
        <pre className="w-full text-white whitespace-pre-wrap font-mono overflow-auto">
            {
                words.map((word, index) => {
                    return <span className="hover:underline cursor-pointer" onClick={async () => {
                        setWord(word)
                        await complete(JSON.stringify({
                            word: word
                        }),
                    )}} key={index}>{word} </span> 
                })
            }
        </pre>
    )
}
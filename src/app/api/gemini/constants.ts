const promptText: string = `
Please give me a definition and an ASCII art diagram that visually represents the word's meaning.
This definition must contain atleast 70 words and it should be divided into paragraphs and should clearly convey the primary meaning and key characteristics of the word.
This diagram should be composed entirely of standard ASCII characters and serve as a visual interpretation of the word's concept.
The art should be simple yet evocative, aiming to capture the spirit of the word rather than a literal depiction.
The response should first contain the art and then the definition.
I dont expect the any headers like "Word:" or "Definition:" or "ASCII ART" in the response. I just need the art and the definition.
`;

export default promptText;
import React from "react"

type TextProps = {
    title: string
    text: string
}

const Text: React.FC<TextProps> = ({title, text}) => {
    return(
        <main>
            <div className="mt-4 max-w-[1366px] mx-auto bg-green-400">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </main>
    )
}

export default Text
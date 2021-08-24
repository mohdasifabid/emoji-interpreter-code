import { useState } from "react";
import "./styles.css";

const data = [
    {
        emoji: "😀",
        meaning: "Grinning Face"
    },
    {
        emoji: "🤣",
        meaning: "Rolling on the Floor Laughing"
    },
    {
        emoji: "🤑",
        meaning: "Money-Mouth Face"
    },
    {
        emoji: "🥵",
        meaning: "Hot Face"
    },
    {
        emoji: "🤡",
        meaning: "Clown Face"
    }
];

export default function App() {
    const [meaning, setMeaning] = useState("");

    // const [inputText, setInputText] = useState("");
    const [emojiData, setEmojiData] = useState(data);

    function handleClick(clickedEmoji) {
        setMeaning(clickedEmoji);
    }
    function handleChange(e) {
        console.log(e.target.value);
        // setInputText(e.target.value);
        setEmojiData(e.target.value);
    }

    return (
        <div className="App">
            <h1 style={{ color: "pink", backgroundColor: "black" }}>
                Emoji Interpreter
            </h1>
            {/* <h2>{inputText}</h2> */}

            <input onChange={handleChange} />

            <h2>{meaning}</h2>
            <div>
                {emojiData.map((item) => (
                    <span onClick={() => handleClick(item.meaning)} key={item.emoji}>
                        {item.emoji}
                    </span>
                ))}
            </div>

            {/* <p>{counter}</p>
      // <button onClick={handleClick}>Like</button> */}
        </div>
    );
}

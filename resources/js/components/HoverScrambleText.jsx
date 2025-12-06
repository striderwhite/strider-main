import { useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

export default function HoverScrambleText({ text, className = "" }) {
    const [display, setDisplay] = useState(text);
    const timerRef = useRef(null);

    const scramble = () => {
        let frame = 0;
        const totalFrames = text.length + 6;

        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            let output = "";

            for (let i = 0; i < text.length; i++) {
                if (i < frame) {
                    output += text[i]; // reveal real character
                } else {
                    output += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplay(output);
            frame++;

            if (frame > totalFrames) {
                clearInterval(timerRef.current);
                setDisplay(text);
            }
        }, 30);
    };

    return (
        <span
            onMouseEnter={scramble}
            className={`inline-block cursor-pointer ${className}`}
        >
            {display}
        </span>
    );
}

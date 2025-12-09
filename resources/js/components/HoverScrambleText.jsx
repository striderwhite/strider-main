import { useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

export default function HoverScrambleText({ text, className = "" }) {
    const [display, setDisplay] = useState(text);
    const timerRef = useRef(null);

    const scramble = () => {
        let frame = 0;
        const totalFrames = text.length;
        const original = text;

        clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            let output = "";
            // Only scramble up to the current length of the original text
            for (let i = 0; i < original.length; i++) {
                if (i < frame) {
                    output += original[i];
                } else {
                    output += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }
            // Do not add extra letters
            setDisplay(output.slice(0, original.length));
            frame++;
            if (frame > totalFrames) {
                clearInterval(timerRef.current);
                setDisplay(original);
            }
        }, 50);
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

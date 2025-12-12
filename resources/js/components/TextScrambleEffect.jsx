import React, { useEffect, useRef } from "react";

// Same logic as the CodePen version
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
    this.frameRequest = null;
    this.frame = 0;
    this.queue = [];
    this.resolve = null;
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    if (this.frameRequest != null) {
      cancelAnimationFrame(this.frameRequest);
    }
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve && this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const defaultPhrases = [
  "If it exists,",
  "automate it.",
];

export default function TextScrambleEffect({
  phrases = defaultPhrases,
  delay = 2000,
  className = "",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const fx = new TextScramble(textRef.current);
    let counter = 0;
    let timeoutId;

    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        timeoutId = window.setTimeout(next, delay);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    return () => {
      if (fx.frameRequest != null) {
        cancelAnimationFrame(fx.frameRequest);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [phrases, delay]);

  return (
    <div className={`w-full h-full flex justify-center items-center ${className}`}>
      <div ref={textRef} className="ts-text" />
    </div>
  );
}

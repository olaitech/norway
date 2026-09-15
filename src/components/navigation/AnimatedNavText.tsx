"use client";

import styles from "./AnimatedNavText.module.css";

type AnimatedNavTextProps = {
  text: string;
  className?: string;
};

export function AnimatedNavText({ text, className = "" }: AnimatedNavTextProps) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        data-text={text}
        className={`${styles.root} ${className}`.trim()}
      >
        <span className={styles.text}>{text}</span>
      </span>
    </>
  );
}

"use client";

import styles from "./AnimatedNavText.module.css";

type AnimatedNavTextProps = {
  text: string;
  className?: string;
};

export function AnimatedNavText({ text, className = "" }: AnimatedNavTextProps) {
  return (
    <span
      data-text={text}
      className={`${styles.root} ${className}`.trim()}
    >
      <span className={styles.text}>{text}</span>
    </span>
  );
}

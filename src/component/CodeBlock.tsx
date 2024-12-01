import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const CodeBlock: React.FC<{
  code: string;
  language: string;
  flag?: boolean;
}> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef.current && !codeRef.current.dataset.highlighted) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;

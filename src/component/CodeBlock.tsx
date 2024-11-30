import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const CodeBlock: React.FC<{ code: string; language: string }> = ({
  code,
  language,
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;

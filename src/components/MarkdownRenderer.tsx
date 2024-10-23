import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

interface MarkdownRendererProps {
  answer: string | null;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ answer }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [answer]);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[gfm]}>
        {answer}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;

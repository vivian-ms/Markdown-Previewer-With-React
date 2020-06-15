import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import '../../../node_modules/highlight.js/styles/default.css';

const Preview = ({ markdown }) => {
  marked.setOptions({
    // Highlight code blocks
    highlight: (code, language) => {
      const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
      return hljs.highlight(validLanguage, code).value;
    },
    // Allow line breaks with return button
    breaks: true
  });

  const renderer = new marked.Renderer();
  // Insert target="_blank" into <a> tags
  renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div id="preview-container" className="col-12 col-lg-6">
      <h6 className="px-2 py-1 text-muted">Preview</h6>
      <div id="preview" className="p-3" dangerouslySetInnerHTML={{ __html: marked(markdown, {renderer: renderer}) }} />
    </div>
  );
};

export default Preview;

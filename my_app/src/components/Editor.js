import React from 'react';

const Editor = ({ markdown, handleChange }) => {
  return (
    <div id="editor-container" className="col-12 col-lg-6">
      <label htmlFor="editor" id="editor_label" className="h6 px-2 py-1 text-muted">Editor</label>
      <textarea className="form-control p-3 shadow-none" id="editor" value={markdown} onChange={handleChange} />
    </div>
  );
};

export default Editor;

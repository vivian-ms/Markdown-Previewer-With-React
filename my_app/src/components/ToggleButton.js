import React from 'react';

const ToggleButton = ({ editor, preview, setEditor, setPreview }) => {
  const handleClick = () =>{
    if (editor) {
      setEditor(false);
      setPreview(true);
    }
    if (preview) {
      setEditor(true);
      setPreview(false);
    }
  };

  return (
    <button id="toggle_button" className="position-absolute btn btn-outline-primary" onClick={handleClick}>
      {editor && <span className="fas fa-eye" />}
      {preview && <span className="fas fa-edit" />}
    </button>
  );
};

export default ToggleButton;

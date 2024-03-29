import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import ToggleButton from './components/ToggleButton';
import Footer from './components/Footer';



const placeholder = `# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

*Italic*
**Bold**
***Italic & Bold***
~~Strikethrough~~

> This is a blockquote
> Lorem ipsum dolor sit amet
> Lorem ipsum dolor sit amet

Inline code: \`<p>Lorem ipsum</p>\`

\`\`\`html
<!-- Block of code -->
<h1>Hello World</h1>
<p>Lorem ipsum</p>
\`\`\`

\`\`\`js
// Another block of code
function init() {
console.log('Hello World');
}
\`\`\`

- Unorder List Item 1
- Unorder List Item 2

1. Order List Item 1
2. Order List Item 2

![Image of Marked.js](https://avatars2.githubusercontent.com/u/19886934?s=400&v=4)
Markdown parsed with **[Marked.js](https://marked.js.org/#/README.md#README.md)**`;




function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  const [editor, setEditor] = useState(true);
  const [preview, setPreview] = useState(true);
  const [button, setButton] = useState(false);

  const toggleView = () => {
      // If window < 992px, show editor and toggle button, hide preview
    if (window.innerWidth < 992) {
      setEditor(true);
      setPreview(false);
      setButton(true);

      // If window >= 992px, show editor and preview, hide toggle button
    } else {
      setEditor(true);
      setPreview(true);
      setButton(false);
    }
  };

  useEffect(() => {
    toggleView();

      // Set cursor to beginning of textarea
    let editor = document.querySelector('#editor');
    editor.setSelectionRange(0, 0);
    editor.focus();
  }, []);

  window.addEventListener('resize', () => {
    toggleView();
  });

  const handleChange = evt => {
    setMarkdown(evt.target.value);
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="row m-0 no-gutters position-relative">
        {editor && <Editor markdown={markdown} handleChange={handleChange} />}
        {preview && <Preview markdown={markdown} />}
        {button && <ToggleButton editor={editor} preview={preview} setEditor={setEditor} setPreview={setPreview} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;

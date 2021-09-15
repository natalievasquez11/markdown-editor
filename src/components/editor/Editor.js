import './editor.css';

function Editor() {

  return(
    <div className='editor-container'>
      <h2 className='editor-header'>Editor</h2>
      <textarea id='editor' type='text' 
      // value=''
      />
    </div>
  )
}

export default Editor;
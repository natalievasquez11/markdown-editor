import './editor.css';

function Editor(props) {

  return(
    <div className='editor-container'>
      <h2 className='editor-header'>Editor</h2>
      <textarea id='editor' type='text' >
        {props.text}
      </textarea>
    </div>
  )
}

export default Editor;
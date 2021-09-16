import marked from 'marked';
import './preview.css';

function Preview(props) {
  let markedText = marked(' # Blah');

  return(
    <div className='preview-container' id='preview'>
      <h2 className='preview-header'>Preview</h2>
      <p id='marked-text' dangerouslySetInnerHTML={{__html: markedText}} />
    </div>
  )
}

export default Preview;

import marked from 'marked';
import './preview.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { text: state.text }
}

function Preview({ text }) {
  let markedText = marked(text);

  return(
    <div className='preview-container' id='preview'>
      <h2 className='preview-header'>Preview</h2>
      <p id='marked-text' dangerouslySetInnerHTML={{__html: markedText}} />
    </div>
  )
}

export default connect(mapStateToProps)(Preview);

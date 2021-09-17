import marked from 'marked';
import './preview.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { text: state.text }
}

function Preview({ text }) {
  // let markedText = marked(text);

  return(
    <div className='preview-container' >
      <h2 className='preview-header'>Preview</h2>
      <p id='preview' className='marked-text' dangerouslySetInnerHTML={{__html: marked(text, { breaks: true })}} />
    </div>
  )
}

export default connect(mapStateToProps)(Preview);

import './editor.css';
import { connect } from 'react-redux';
import { updatePreview } from '../../redux/actions/index';

function Editor({ text, updatePreview }) {

  let handleTextUpdate = (e) => {
    updatePreview(e.target.value);
  }

  return (
    <div className='editor-container'>
      <h2 className='editor-header'>Editor</h2>
      <textarea id='editor' type='text' value={text} onChange={handleTextUpdate} />
    </div>
  )
}

const mapStateToProps = state => {
  return { text: state.text }
}

const mapDispatchToProps = { updatePreview }

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
import './editor.css';
import { connect } from 'react-redux';
import { updatePreview } from '../../redux/actions/index';

const mapStateToProps = state => {
  return { text: state.text }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     updatePreview: text => dispatch(updatePreview(text));
//   }
// }

function Editor({ text }) {
  return (
    <div className='editor-container'>
      <h2 className='editor-header'>Editor</h2>
      <textarea id='editor' type='text' 
      value={text}
      />
    </div>
  )
}

export default connect(mapStateToProps)(Editor);
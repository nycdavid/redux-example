import React from 'react';
import { connect } from 'react-redux';

class Brother extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="brother">
        <input type="text" onChange={evt => {
          this.props.onTextChange(evt.target.value);
        }} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    inputText: state.inputText
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTextChange: text => {
      dispatch(inputTextChangeAction(text));
    }
  }
}

function inputTextChangeAction(text) {
  return {
    type: 'INPUT_TEXT_CHANGE',
    text: text
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brother);

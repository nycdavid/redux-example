import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sister = (state) => {
  console.log(state)
  return (
    <section className="sister">
      <h2>{state.inputText}</h2>
    </section>
  )
}

function mapStateToProps(state) {
  let inputTextState = state.inputTextState;
  return {
    inputText: inputTextState.inputText
  }
}

export default connect()(Sister);

import React from 'react';
import Brother from './Brother.jsx'
import Sister from './Sister.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='app'>
        <h2>The App!</h2>
        <Brother />
        <Sister />
      </section>
    )
  }
}

export default App;

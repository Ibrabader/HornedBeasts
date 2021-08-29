import React from 'react'; // we are adding the react library into our App component

import Main from './compnents/main';

import Header from './compnents/header';

import Footer from './compnents/footer';

// create the component that will be rendering the HTML and extend the React library Component Class
class App extends React.Component {

  render() { // render function that is used to render the HTML
    return (
      <div>
        {/* Create a header component */}
        <Header />
        <Main />
      <Footer/>
        {/* Creating an instance of the Main component */}
        {/* as if we are saying new Main() */}
        {/* Create a Footer component */}
      </div>
    )
  }
}

export default App; // Make it visible 
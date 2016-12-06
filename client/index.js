
// import React from 'react';
// import ReactDOM from 'react-dom';

// GET req to server,
// assign value to variable
// place variable below?
ReactDOM.render(
  //<div>{window.getQuote}</div>
  <App getQuote={window.getQuote}/>,
  document.getElementById('root')
);
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: "#ffde00",
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "center"
    };
    // const style = div {
    //   color: maroon;
    //   background-color: green;
    // };
    //style={style}
    return (
      <div style={letterStyle}>Hey everyone</div>
    );
  }
}

window.App = App;
/* <div>
<h1>Hello everyone hi i want to succeed with mvp and i wish that you all love yourself indeed, thanks.</h1>
<h2>3 person pep talk Andrew^2 and Alonzo</h2></div> */
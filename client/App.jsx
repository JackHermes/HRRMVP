class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var letterStyle = {
      padding: 10,
      marginLeft: "auto",
      marginRight: "auto",
      verticalAlign: "bottom",
      backgroundColor: "#ffde00",
      color: "#333",
      display: "block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "left",
      paddingLeft: "5%"
    };

    // var obj = this.props.getQuote();
    // console.log(obj);
    // const style = div {
    //   color: maroon;
    //   background-color: green;
    // };
    //style={style}
    return (
      <div style={letterStyle}>When we hit our lowest point, we are open to our greatest change.</div>
    );
  }
}
window.App = App;
/* <div>
<h1>Hello everyone hi i want to succeed with mvp and i wish that you all love yourself indeed, thanks.</h1>
<h2>3 person pep talk Andrew^2 and Alonzo</h2></div> */
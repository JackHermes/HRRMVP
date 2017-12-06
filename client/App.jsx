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
    var quotes = [
      {
        sifu: 'Uncle Iroh',
        q: 'It is important to draw wisdom from different places. If you take it from only one place it become rigid and stale.'
      },
      {
        sifu: 'Avatar Aang',
        q: 'When we hit our lowest point, we are open to our greatest change.'
      },
      {
        sifu: "Tre",
        q: "Backbone is kind of like one of the old Create Your Own Adventure books, except when you pick the wrong way you just end up in some dark corner of the woods with your flashlight battery going out."
      },
      {
        sifu: "Andrew^2 + Alonzo",
        q: "Hello everyone hi i want to succeed with mvp and i wish that you all love yourself indeed, thanks."
      },
      {
        sifu: "Neville",
        q: "[*Robin introduces a Hermoine module*] that's the module that actually does all the work"
      },
      {
        sifu: "New",
        q: "So much new I can do."
      }
    ];
    var randomizer = function () {
      var obj = quotes[Math.floor(Math.random() * quotes.length)];
      return `
      ${obj.q}
      -${obj.sifu}
      `;
    }
    // var obj = this.props.getQuote();
    // console.log(obj);
    // const style = div {
    //   color: maroon;
    //   background-color: green;
    // };
    //style={style}
    return (
      <div style={letterStyle}>{randomizer()}</div>
    );
  }
}
window.App = App;
/* <div>
<h1>Hello everyone hi i want to succeed with mvp and i wish that you all love yourself indeed, thanks.</h1>
<h2>3 person pep talk Andrew^2 and Alonzo</h2></div> */
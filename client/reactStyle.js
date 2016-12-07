var style = React.createClass({
  render: function() {
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

      return (
        <div>
          {this.props.children}
        </div>
      );
    }
});

window.style = style;
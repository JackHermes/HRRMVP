var getQuote = () => {
  $.get("127.0.0.1:8080", function(data) {
    console.log(data);
  });
};
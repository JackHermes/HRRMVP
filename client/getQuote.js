var getQuote = () => {
  $.get("127.0.0.1:3000/", function(data) {
    console.log(data);
  });
};
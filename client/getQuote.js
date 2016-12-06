var getQuote = () => {
  $.get("http://127.0.0.1:3000", function(res) {
    document.write(res);
    return res;
  });
};

window.getQuote = getQuote();
var getQuote = () => {
  var returned;
  $.get("http://127.0.0.1:3000", function(res) {
    // document.write(res);
    console.log("res: ",res);
    returned = res;

  }).done(function() {
    console.log("Promise: ",returned);
    return returned;
  })
};



window.getQuote = getQuote;
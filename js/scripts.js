function factorIt(entryNum) {
  if ( entryNum < 0 ) {
    return -1;
  } else if ( entryNum === 0 ) {
    return 1;
  } else if ( entryNum > 0 ) {
    return (entryNum * factorIt(entryNum - 1));
  };
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var entryNum = parseInt($("input#entry").val());

    var factorNum = factorIt(entryNum);
    alert(factorNum);

    event.preventDefault();
  });
});

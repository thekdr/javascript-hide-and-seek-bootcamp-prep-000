function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.querySelector("#nested");
  return nested.querySelector(".target");
}

function increaseRankBy(n) {
  var inc = parseInt(n);
  var lis = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i < lis.length; i++) {
    var newRank = parseInt(lis[i].innerHTML) + inc;
    lis[i].innerHTML = (newRank);
  }
}

function deepestChild() {
  
}
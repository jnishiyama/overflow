'use strict';

//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

findResults(document)

function getAnswer(url, elRep){
  $.get(url, function(data){
    var qHeader = $(data).find("#question-header");
    var question = qHeader.add($(data).find("#question"));
    var answer = $("<h1>ANSWER</h1>").add($(data).find(".accepted-answer"));
    $(elRep).html(question.add(answer));
  });
}

function findResults(dom){
  var counter = 0;
  $(dom).find(".result-link").each(function(index){
    counter++;
    if (counter <=10){
      console.log($(this).find("a").attr("href"));
      var url, elRep;
      url = $(this).find("a").attr("href");
      elRep = $(this).next();
      getAnswer(url, elRep);
    }
  });
}
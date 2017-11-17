import{AgeConversion} from "./../js/ageConversion.js";

$(document).ready(function(){
  $("#age-form").submit(function(event){
    event.preventDefault();
    $("#output-list li").remove();
    let age = $("#age").val();
    let ageConverter = new AgeConversion(age);
    $("#output-list").append("<li>"+"You are: "+ageConverter.yearToSeconds(age)+" seconds olds"+"</li>");
    $("#output-list").append("<li>"+"You are: "+ageConverter.mercuryAge(age)+" year olds on mercury"+"</li>");
    $("#output-list").append("<li>"+"You are: "+ageConverter.venusAge(age)+" year olds on venus"+"</li>");
    $("#output-list").append("<li>"+"You are: "+ageConverter.marsAge(age)+" year olds on mars"+"</li>");
    $("#output-list").append("<li>"+"You are: "+ageConverter.jupiterAge(age)+" year olds on jupiter"+"</li>");

  });
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeConversion = exports.AgeConversion = function () {
  function AgeConversion(age) {
    _classCallCheck(this, AgeConversion);

    this.age = age;
  }

  _createClass(AgeConversion, [{
    key: "yearToSeconds",
    value: function yearToSeconds(age) {
      return age * (365 * 24 * 60 * 60);
    }
  }, {
    key: "mercuryAge",
    value: function mercuryAge(age) {
      return parseFloat(age * .24);
    }
  }, {
    key: "venusAge",
    value: function venusAge(age) {
      return parseFloat(age * .62);
    }
  }, {
    key: "marsAge",
    value: function marsAge(age) {
      return parseFloat(age * 1.88);
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge(age) {
      return parseFloat(age * 11.86);
    }
  }, {
    key: "getLifeExpectancy",
    value: function getLifeExpectancy() {
      var currentDate = new Date();
      if (currentDate.getFullYear() - this.age < 2000) {
        return 70;
      } else {
        return 75;
      }
    }
  }]);

  return AgeConversion;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _ageConversion = require("./../js/ageConversion.js");

$(document).ready(function () {
  $("#age-form").submit(function (event) {
    event.preventDefault();
    $("#output-list li").remove();
    var age = $("#age").val();
    var ageConverter = new _ageConversion.AgeConversion(age);
    $("#output-list").append("<li>" + "You are: " + ageConverter.yearToSeconds(age) + " seconds olds" + "</li>");
    $("#output-list").append("<li>" + "You are: " + ageConverter.mercuryAge(age) + " year olds on mercury" + "</li>");
    $("#output-list").append("<li>" + "You are: " + ageConverter.venusAge(age) + " year olds on venus" + "</li>");
    $("#output-list").append("<li>" + "You are: " + ageConverter.marsAge(age) + " year olds on mars" + "</li>");
    $("#output-list").append("<li>" + "You are: " + ageConverter.jupiterAge(age) + " year olds on jupiter" + "</li>");
  });
});

},{"./../js/ageConversion.js":1}]},{},[2]);

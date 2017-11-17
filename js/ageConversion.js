export class AgeConversion {

  constructor(age) {
    this.age=age;
  }

  yearToSeconds(age) {
    return (age*(365*24*60*60));
  };

  mercuryAge(age) {
    return parseFloat(age*.24);
  };
  venusAge(age) {
    return parseFloat(age*.62);
  };
  marsAge(age) {
    return parseFloat(age*1.88);
  };
  jupiterAge(age) {
    return parseFloat(age*11.86);
  };

  getLifeExpectancy() {
    let currentDate = new Date();
    if((currentDate.getFullYear()-this.age)<2000){return 70;}
    else {return 75;}
  };
}

export class AgeConversion {

  constructor(age) {
    this.age=age;
  }

  yearToSeconds() {
    return (this.age*(365*24*60*60));
  };

  mercuryAge() {
    return parseFloat(this.age*.24);
  };
  venusAge() {
    return parseFloat(this.age*.62);
  };
  marsAge() {
    return parseFloat(this.age*1.88);
  };
  jupiterAge() {
    return parseFloat(this.age*11.86);
  };

  getLifeExpectancy() {
    // let currentYr = new Date.getFullYear();
    // if((currentYr-this.age)<2000){return 70;}
    // else {return 75;}
  };
}

import{AgeConversion} from "./../js/ageConversion.js";

describe("AgeConversion",function(){
  it("test year to seconds method; should return 31536000 for input 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.yearToSeconds()).toEqual(31536000);
  });

  it("test earth year to mercury year; should return .24 for input of 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.mercuryAge()).toEqual(.24);
  });

  it("test earth year to venus year; should return .62 for input of 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.venusAge()).toEqual(.62);
  });

  it("test earth year to mars year; should return 1.88 for input of 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.marsAge()).toEqual(1.88);
  });

  it("test earth year to jupiter year; should return 11.86 for input of 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.jupiterAge()).toEqual(11.86);
  });
});

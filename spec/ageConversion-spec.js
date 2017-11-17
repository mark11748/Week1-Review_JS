import{AgeConversion} from "./../js/ageConversion.js";

describe("AgeConversion",function(){
  it("test year to seconds method; should return 31536000 for input 1",function(){
    let testModule = new AgeConversion(1);
    expect(testModule.yearToSeconds()).toEqual(31536000);
  });
});

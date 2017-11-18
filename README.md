# **Code-Review1_JS**
#### By Mark Woodward

## _Description_
takes users age and outputs their age in mercury,venus,mars and jupiter years. additionally determines life expectancy based on whether they were born after 2000 and displays either a message or approximate years remaining.

## _Installation_
1. download from github.
2. install necessary packages & dependancies through your command line by using "npm install" and "bower install"
3. run index.html in your browser of choice

## _Technologies Used_
* html
* css
* js (with ecma 6 using babel)
* node
* bower
* jquery
* bootstrap

## _Known Bugs_
* looses precision with leap years

## _Specs_
* take in an age
* convert to seconds > multiply age by 365(yr)*24(hrs)*60(min)*60(sec) > display converted age
* Return the age of a human in Mercury years > multiply age by .24 > display mercury age
* Return the age of a human in Venus years > multiply age by .62 > display venus age
* Return the age of a human in Mars years > multiply age by 1.88 > display mars age
* Return the age of a human in Jupiter years > multiply age by 11.86 > display jupiter age
* Return estimate of how many years a user has left to live on each planet based on some other value > determine year born via age and test whether born post or pre 2000 >
  * if born before expectancy is 70yrs
  * if born before expectancy is 75yrs
* Test if age exceeds expectation >
  *if yes > display message
  *if no  > display approximate remaining years


**schedule:**
* set up specs    : 45 min;
* finish readme   : 10 min;
* set up packages : 30 min;
* html            : 35 min;
* css             : 10 min;
* back-end.js     : 1 hr;
* front-end.js    : 30 min;
* testing         : 1 hr;

## _Support and Contact Details_   
Contact the developer if you find a way to monetize this product, or with bug reports or feedback. <markwood117@gmail.com>  

## _License_
This program uses an MIT license.

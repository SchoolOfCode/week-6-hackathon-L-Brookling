# Hackathon 6: Make your own Codewars style challenge

In this workshop, I have been tasked to create my own programming challenge for others to solve, similar to the ones on Codewars. I will write unit tests to validate solutions. Then I can share my challenge with other bootcampers for them to solve. If a submitted solution passes all of my tests, it will be considered a correct solution - just like on Codewars.

## Overview

In this project you will write a function to find out whether the bus ticket number you have to get to Faisal's meet up is lucky or not.

The ticket is seen as lucky when the sum of the first three digits equals the sum of the last three digits.

The outcome should return true if the ticket number is 'lucky', otherwise return false.

Consider that input is always a string.

Here are some examples below:
isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed
isLucky('12a21a') => false // Letters are not allowed
isLucky('100200') => false // The ticket is not lucky

## Planning Phase

MVP 1 - Lucky bus ticket:
The coder must write a solution which calls the ticket when the sum of the first three digits are equal to the sum of the last three digits. A lucky ticket ticket should return true.

MVP 2 - Lucky receipt for coffee:
The coder must then write a solution which calls the receipt lucky when the sum of the first five digits are equal to the sum of the last four. A lucky receipt should return true.

MVP 3 - Shaking Faisal's hand:
If both conditions are true, a text prompt/ GIF will appear indicating that Faisal is impressed and will shake your hand.

## Stretch goals

MVP 4 - If your route to the meet up in miles has more than one number the same e.g. 65.6 miles, Faisal will need to buy you a drink!

## Last thing to do

Run npm install

Fill out challenge

Run npm test to see if you passed

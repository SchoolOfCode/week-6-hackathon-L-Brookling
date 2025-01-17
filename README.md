## Overview

For context, you really want to attend Faisal's meet up and you can only get there by bus due to factors out of your control. Faisal is offering handshakes to anyone who makes it to the meet up with a lucky bus ticket. What's a lucky bus ticket you ask?...good question! A lucky bus ticket consists of a six-digit code, if the sum of the first three numbers equals the sum of the last three, it is considered a "lucky ticket".

You will write a function to find out whether the bus ticket number you have to get to Faisal's meet up is lucky or not.

The ticket is seen as lucky when the sum of the first three digits equals the sum of the last three digits.

The outcome should return true if the ticket number is 'lucky', otherwise return false.

Consider that tickets with only 6 digits are accepted into the function.

Consider that input is always a string.

Here are some examples below:
isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed
isLucky('12a21a') => false // Letters are not allowed
isLucky('100200') => false // The ticket is not lucky

## Last thing to do

Run npm install

Fill out challenge

Run npm test to see if you passed

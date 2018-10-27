# Week 3 Independent Project

#### "Beep Booop, is that a number?" - Oct 26th, 2018

#### By Devin Sweeting

## Description

This is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:
* Numebrs that contain a 0 are replaced (all digits) with "Beep!"
* NUmebrs that contain a 1 are replaced (all digits) with "Boop!"
Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

## Project Specs

* Program replaces all numbers with 0 with "Beep!"
  Example input: 0
  Example Output: ["Beep!"]

* Program replaces all numbers with 1's with "Boop!"
    Example input: 1
    Example Output: ["Boop!"]

* Program replaces all numbers divisible by 3 with text
  Example input: "3"
  Example Output: (I'm sorry Dave I just can't do that)

* Program breaks down the inputted number into an array counting up to the inputted number
    Example Input: 10
    Example Output: [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]

* Program will run through the new array applying rules (1-3) to each element of the array
  Example input: 4
  Example output: [Beep, Boop, "i'm sorry Dave I jsut can't do that", 4 ,5]

* Program will take the converted array, push it to a string, and give it back to the user as Robo translated.


## Setup/Installation Requirements

* _ download from https://github.com/devsweeting/BeepBoop.git
* _ open in text editor

## Known Bugs

this program functions appropriately. It will not give any feedback for nonnumerical characters. and if you put too large of a number (i.e 98371109283091), it will break.

## Support and contact details

Contact me at devinsweeting@gmail.com

## Technologies Used

languages used we HTML, CSS, JS, bootstrap & Jquery. Text editor Atom was used.

### License

open source

Copyright (c) 2016 Devin Sweeting

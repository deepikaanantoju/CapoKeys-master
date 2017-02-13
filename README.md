# CapoKeys
## A web application using ASP.NET and Angular to translate the keys of chord charts

## Goal of the exercise

Given a series of chords (text string) and a capo value (integer) translate the chords to the correct key.
Example: The chord series "G Am C D" with a capo value of 2 would be "A Bm D E"

Use Bootstrap (3.x) as a CSS framework and Angular (v 1.x) as your MVC framework.

## The notes of the chromatic scale

C C# D D# E F F# G G# A A# B

Moving one to the right is called "up one half step" each time, and to the left is "down one-half step"
Moving two to the right is called "up one step" (or "one whole step"), etc.

The series loops around, so one half step above B is C, and it starts over again.

Chords are always written with the NOTE first, then any modifiers afterwards.

## Modifiers

"#" = sharp (one half-step above the letter). F# is one half step above F

### Other modifiers
These do not affect the key, but it is important that they are preserved in the translation. 

"m" = minor. ex: C#m

"m7" = minor seventh. ex: Dm7

"M7" = major seventh. ex: CM7

"5" = fifth. ex: A5

"7" = dominant seventh. ex. F7

## Capo

A capo is a device that changes the key of the song. Capos can only be zero or positive integers. 
Usually the highest capo value will be 7, but handle cases up to 9 just in case.

Capo 1 means one half step up.
Capo 2 means two half steps (i.e. one whole step) up, etc.
Capo 0 means NO change - the chord string should remain unchanged







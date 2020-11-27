[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/map-coordinates?style=flat-square)](/LICENSE.txt)
## Map Coordinates

Interactive component that lets users convert longitude and latitude coordinates between Degrees, Minutes, Seconds (DMS) and Digital Degrees (DD) formats.

## Project Status

I am currently rebuilding this component in a few ways:

* I am converting the single and lengthy JavaScript file that used "namespacing" into multiple, shorter JavaScript files that use ES6 modules. My hope is that this makes the code easier to understand.

* I am consolidating some of the math functions and Regular Expression snippets and making them re-usable across the component. Again, I hope this makes the code easier to read.

* I'm adding a few more checks to ensure correct user input.

## Project Screen Shots

I will add screenshots when the project is completed.

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

Interface where users can convert longitude and latitude coordinates between the Degrees, Minutes, Seconds (DMS) and Digital Degrees (DD) formats. Safeguards ensure users are inputting numbers only and that the numbers are within the allowable range.

I am interested in maps and wanted to build a calculator that converts Longtitude and Latitude coordinates between the Degrees, Minutes, Seconds (DMS) and Digital Degrees (DD) formats.

## Acknowledgments

* Latitude and Longitude guidance from [Humboldt State University](http://gsp.humboldt.edu/OLM/Lessons/GIS/01%20SphericalCoordinates/Reporting_Geographic_Coordinates.html), [University of Nebraska - Lincoln](http://astro.unl.edu/naap/motion1/tc_units.html), and [Wikipedia](https://en.wikipedia.org/wiki/Decimal_degrees).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).
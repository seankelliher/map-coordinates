[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/map-coordinates?style=flat-square)](/LICENSE.txt)
## Map Coordinates

Interactive component that lets users convert longitude and latitude coordinates between Degrees, Minutes, Seconds (DMS) and Digital Degrees (DD) formats.

## Project Screen Shots

![screen shot of project](/screenshots/map-coordinates-screenshot1.jpg)

![screen shot of project](/screenshots/map-coordinates-screenshot2.jpg)

![screen shot of project](/screenshots/map-coordinates-screenshot3.jpg)

![screen shot of project](/screenshots/map-coordinates-screenshot4.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

I wanted to create a component where users can convert longitude and latitude coordinates between the Degrees, Minutes, Seconds (DMS) and Digital Degrees (DD) formats. The math to convert the coordinates is not overly complex. However, there were a number of challenges in creating this component.

I needed to ensure that user input was the correct format: correct length, digits only, between a certain range of numbers, and , in some cases, began with a negative or positive sign. When users got it wrong, I wanted to return an instructive error message that guided them to correct the error. I accomplished this using a combination of regular expression and if/else statements.

I also wanted to keep the page a manageable length so I created a "tab" system where users can easily switch between the forms to convert "DMS to DD" coordinates and the forms to convert "DD to DMS" coordinates.

I also wanted to let users clear the inputs or results in one form (for example, DMS to DD Longitude) without clearing the inputs and result in all forms. I did this with a number of event listeners that monitor specific forms and pass their inputs to a universal function that "clears" the inputs. 

Lastly, as I was building this I wrestled with structure. Do I build several smaller functions that each perform a similar task on a specific form? Or, do I build one large function that performs a task on all forms? I combined tasks into functions where I could and kept seperate functions otherwise. At times, I could have combined more tasks into a single function. But, it would have made the component much harder to undertand and modify in the future. I decided against doing this.


## Acknowledgments

* Latitude and Longitude guidance from [Humboldt State University](http://gsp.humboldt.edu/OLM/Lessons/GIS/01%20SphericalCoordinates/Reporting_Geographic_Coordinates.html), [University of Nebraska - Lincoln](http://astro.unl.edu/naap/motion1/tc_units.html), [Wikipedia](https://en.wikipedia.org/wiki/Decimal_degrees), [Journey North](https://journeynorth.org/tm/LongitudeIntro.html), [Exploring Our Fluid Earth](https://manoa.hawaii.edu/exploringourfluidearth/physical/world-ocean/locating-points-globe/compare-contrast-connect-converting-decimal-degrees), and [University of Alaska, Fairbanks](http://cespubs.uaf.edu/publications?show=1#2491).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).
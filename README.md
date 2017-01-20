# paper-timezone

This component based on moment-timezone to select timezone based on location. Check more about timezone [here](http://momentjs.com/timezone/) 

 - Demos can be found [here](http://github.com/bluewatertracks/paper-timezone)
 - Below is sample screenshot in dialog view.

![Sample screenshot](images/timezonedialog.png)

- Below is sample screenshot in dropdown view

![dropdown](images/dropdown-view.png)

## Features

 - Following code is required to place in the polymer web component.

		<paper-timezone  name="timezone" timezone="[[timezone]]" label="Timezone (Continent/City)" error-message="Please enter a timezone offset"></paper-timezone>
 - It is used to select timezone offset from dialog or dropdown.
 - It also supports for mobile devices so that it can be viewed as dropdown in mobile devices.
 - Extremely simple to set up ([simple demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/simple.html))
 - Pretty good styling support ([demo](http://david-mulder.github.io/paper-datatable/components/paper-datatable/demo/theming.html))
 - Usable on mobile. Only tested on Chrome for Android

## Installation

The element can be installed using bower using

    bower install --save paper-timezone

## Usage

Check out the [getting started guide](http://david-mulder.github.io/paper-datatable/components/paper-datatable/docs/docs.html?getting-started).

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License version 3 of the License as published by
the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

This project uses a fair share license construction, if you wish to use this project commercially you will likely want to
continue reading [here](https://github.com/David-Mulder/fair-share-license/blob/master/CONTRIBUTING.md). If you wish to
donate please contact me personally.

## Contributing

We absolutely love sending us new pull requests, so let us just outline some advice:

 1. If you are planning on doing anything except a quick fix, it's a wise idea to open an issue first with your plans. That
    way we can talk it through and check whether it might not already be easily possible and whether it fits with the
    spirit of the component (I try to keep everything pretty declarative, generic and Polymer-y).
 2. You absolutely *must* make every feature you work on at least a separate commit and ideally a separate pull request.
    This both makes it clearer to me what is what, makes it easier to pull only the relevant parts and prevents situations
    where I can't give credits to the good parts, because of the bad parts.
 3. You have to explicitly agree in your pull request to the terms described in the
    [fair share license construction](https://github.com/).
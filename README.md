# Lunar phase
Calculate phase of the moon using Julian date.
  
<p align="center">
  <img src="https://github.com/jasonsturges/lunarphase-js/raw/main/public/moon.png" width="256px" height="auto" />
</p>


# Getting Started

To install, execute:

    npm i lunarphase-js

Then, import into a project and use as:

```js
import { Moon } from "lunarphase-js";

const phase = Moon.lunarPhase();
```

This package provides for following distributables:
- CJS: CommonJS
- ESM: ES Modules 
- UMD: Universal Module Definition (browser)
- IIFE: Immediately invoked function expression
- TypeScript declaration types


# Usage

In the lunar calendar there are 8 phases each synodic month, which is the number of days to complete the cycle. This time between two identical syzygies is equivalent to 29.53059 Earth days.

Lunar phases, in order:

| Phase           | Northern Hemisphere | Southern Hemisphere |
| --------------- | ------------------- | ------------------- |
| New             | 🌑                  | 🌑                  |
| Waxing Crescent | 🌒                  | 🌘                  |
| First Quarter   | 🌓                  | 🌗                  |
| Waxing Gibbous  | 🌔                  | 🌖                  |
| Full            | 🌕                  | 🌕                  |
| Waning Gibbous  | 🌖                  | 🌔                  |
| Last Quarter    | 🌗                  | 🌓                  |
| Waning Crescent | 🌘                  | 🌒                  |


# API Reference:

The following functions are exported from `Moon`:

| Function          | Output              | Description                                           |
| ----------------- | ------------------- | ----------------------------------------------------- |
| lunarPhase()      | Waxing Gibbous      | Get lunar phase for a given date                      |
| lunarPhaseEmoji() | 🌖                  | Get emoji of lunar phase for a given date             |
| isWaxing()        | true                | Whether the moon is waxing                            |
| isWaning()        | false               | Whether the moon is waning                            |
| lunarAge()        | 11.367344279004676  | Earth days since the last new moon                    |
| lunarAgePercent() | 0.38497186542446116 | Percentage through the lunar synodic month            |
| lunarDistance()   | 56.04166690080031   | Distance to the moon measured in units of Earth radii |
| lunationNumber()  | 1217                | Brown Lunation Number (BLN)                           |

Visit this repository's GitHub Pages for a live example: https://jasonsturges.github.io/lunarphase-js/

All functions default to the current date, as in "now":

```js
import { Moon } from "lunarphase-js";

const phase = Moon.lunarPhase();
```

Otherwise, pass a date object to each function for a specific date.

```js
import { Moon } from "lunarphase-js";

const date = new Date();
const phase = Moon.lunarPhase(date);
```


### Lunar Phase

To get the current lunar phase from the `LunarPhase` enum (ex: "FULL")

```js
const phase = Moon.lunarPhase();
```


### Lunar Phase Emoji

To get the current lunar phase emoji from the `LunarEmoji` (ex: "🌕"):

```js
const phaseEmoji = Moon.lunarPhaseEmoji();
```

As phases are inverted between Northern and Southern Hemispheres, optionally pass `Hemisphere` options.

```js
import { Hemisphere, Moon } from "lunarphase-js";

const date = new Date();
Moon.lunarPhaseEmoji(date, {
  hemisphere: Hemisphere.SOUTHERN,
});
```

To get emoji for other lunar phases, pass a `LunarPhase` enum:

```js
import { LunarPhase, Moon } from "lunarphase-js";

const emoji = Moon.emojiForLunarPhase(LunarPhase.FULL);
```

Optionally pass a `Hemisphere` to the function:

```js
import { Hemisphere, LunarPhase, Moon } from "lunarphase-js";

const emoji = Moon.emojiForLunarPhase(LunarPhase.FULL, {
  hemisphere: Hemisphere.SOUTHERN,
});

```


### Waxing

Whether the moon is waxing (ex: false)

```js
const waxing = Moon.isWaxing();
```


### Waning

Whether the moon is waning (ex: true)

```js
const waning = Moon.isWaning();
```


### Lunar Age

Age in Earth days through the current lunar cycle, equivalent to 29.53059 Earth days, based on Mean Synodic Month, 2000 AD mean solar days.

| Phase           | Start          | Event          | End            |
| --------------- | -------------- | -------------- | -------------- |
| New             |                | 0              | 1.84566173161  |
| Waxing Crescent | 1.84566173161  | 3.69132346322  | 5.53698519483  |
| First Quarter   | 5.53698519483  | 7.38264692644  | 9.22830865805  |
| Waxing Gibbous  | 9.22830865805  | 11.07397038966 | 12.91963212127 |
| Full            | 12.91963212127 | 14.76529385288 | 16.61095558449 |
| Waning Gibbous  | 16.61095558449 | 18.4566173161  | 20.30227904771 |
| Last Quarter    | 20.30227904771 | 22.14794077932 | 23.99360251093 |
| Waning Crescent | 23.99360251093 | 25.83926424254 | 27.68492597415 |
| New             | 27.68492597415 | 29.53058770576 |                |

To get the lunar age (ex: 16.54412413414952)

```js
const age = Moon.lunarAge();
```


### Lunar Age Percent

To get the percentage through the lunar cycle (ex: 0.5602368519132597)

```js
const agePercent = Moon.lunarAgePercent();
```


### Lunation Number

Brown Lunation Number (BLN), per Ernest William Brown's lunar theory, defining Lunation 1 as the first new moon of 1923 at approximately 02:41 UTC, January 17, 1923

```js
const lunationNumber = Moon.lunationNumber();
```


### Lunar Distance

Distance to the moon measured in units of Earth radii, with perigee at 56 and apogee at 63.8.

```js
const distance = Moon.lunarDistance();
```


## Julian

Convert to and from Gregorian Dates to Julian Days via the `Julian` module.

API Reference:

| Function   | Output                   | Description                |
| ---------- | ------------------------ | -------------------------- |
| fromDate() | 2459357.5380029744       | Convert date to Julian Day |
| toDate()   | 2021-05-23T05:56:10.418Z | Convert Julian Day to date |

To convert a date to Julian day:

```js
import { Julian } from "lunarphase-js";

const date = new Date();
const julian = Julian.fromDate(date);
```

To convert a Julian day to a date:

```js
import { Julian } from "lunarphase-js";

const julian = 2459356.529302257;
const date = Julian.toDate(julian);
```

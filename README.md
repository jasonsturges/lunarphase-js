# Lunar phase

Calculate phase of the moon using Julian date.


# Getting Started

To install, execute:

    npm i lunarphase-js

Then, import into a project as:

```js
import { Moon } from "lunarphase-js";
```


# Usage

In the lunar calendar there are 8 phases each synodic month, which is the number of days to complete the cycle.  This time between two identical syzygies is equivalent to 29.53059 Earth days.

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

## Julian Day

Convert to and from Gregorian Dates to Julian Days via the `JulianDay` module.

To convert a date to Julian Day:

```js
import { JulianDay } from "lunarphase-js";

const date = new Date();
const julian = JulianDay.fromDate(date);
```

To convert a Julian Day to a date:

```js
import { JulianDay } from "lunarphase-js";

const julian = 2459356.529302257;
const date = JulianDay.toDate(julian);
```


## Lunar Phases


For a specific date, pass a date object to a function

```js
import { Moon } from "lunarphase-js";

const date = new Date();
const phase = Moon.lunarPhase(date);
```

Otherwise, current date will be used

```js
import { Moon } from "lunarphase-js";

const phase = Moon.lunarPhase();
```

### Lunar Phase

To get the current lunar phase from the `LunarPhase` enum (ex: "Full")

```js
const phase = Moon.lunarPhase();
```

### Lunar Phase Emoji

To get the current lunar phase emoji from the `LunarPhaseEmoji` enum (ex: "🌕")

```js
const phaseEmoji = Moon.lunarPhaseEmoji();
```

To get emoji for other lunar phases of the `LunarPhase` enum:

```js
const emoji = Moon.emojiForLunarPhase(Moon.LunarPhase.Full);
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

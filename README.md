# Lunar phase

Calculate phase of the moon using Julian date.


# Getting Started

To install, execute:

    npm i lunarphase-js

Then, import into a project as:

```js
import * as Moon from 'lunarphase-js';
```


# Usage

Lunar phases in order:

- 🌑 New
- 🌘 Waning Crescent
- 🌗 Last Quarter
- 🌖 Waning Gibbous
- 🌕 Full
- 🌔 Waxing Gibbous
- 🌓 First Quarter
- 🌒 Waxing Crescent

For a specific date, pass a date object to a function

```js
import * as Moon from 'lunarphase-js';

const date = new Date();
const phase = Moon.getLunarPhase(date);
```

Otherwise, current date will be used

```js
import * as Moon from 'lunarphase-js';

const phase = Moon.getLunarPhase();
```

### Lunar Phase

To get the current lunar phase from the `LunarPhase` enum (ex: "Full")

```js
const phase = Moon.getLunarPhase();
```

### Lunar Phase Emoji

To get the current lunar phase emoji from the `LunarPhaseEmoji` enum (ex: "🌕")

```js
const phaseEmoji = Moon.getLunarPhaseEmoji();
```

To get emoji for other lunar phases of the `LunarPhase` enum:

```js
const emoji = Moon.emojiForLunarPhase(Moon.LunarPhase.FULL);
```

### Lunar Age

To get the lunar age (ex: 16.54412413414952)

```js
const age = Moon.getLunarAge();
```

### Lunar Age Percent

To get the percentage through the lunar cycle (ex: 0.5602368519132597)

```js
const agePercent = Moon.getLunarAgePercent();
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

### Julian Date

To get the current Julian date (ex: 2459244.5972259142)

```js
const julianDate = Moon.getJulianDate();
```

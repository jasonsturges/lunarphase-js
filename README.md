# Lunar phase

Calculate phase of the moon using Julian date.


# Getting Started

To install, execute:

    npm -i lunarphase-js


# Usage

To get the current lunar phase from the `LUNAR_PHASE` enum:

```js
const date = new Date();
const phase = getLunarPhase(date);
```

Lunar phases in order:

- New
- Waning Crescent
- Last Quarter
- Waning Gibbous
- Full
- Waxing Gibbous
- First Quarter
- Waxing Crescent

To get the percentage through the lunar cycle:

```js
const date = new Date();
const phase = getLunarAgePercent(date);
```

Whether the moon is waxing:

```js
const date = new Date();
const phase = isWaxing(date);
```

Whether the moon is waning:

```js
const date = new Date();
const phase = isWaning(date);
```

To get the percentage through the lunar cycle:

```js
const date = new Date();
const phase = getLunarAgePercent(date);
```

To get the current Julian date:

```js
const date = new Date();
const julianDate = getJulianDate(date);
```

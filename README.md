# Lunar phase

Calculate phase of the moon using Julian date.


# Getting Started

To install, execute:

    npm -i lunarphase-js


# Usage

Lunar phases in order:

- New
- Waning Crescent
- Last Quarter
- Waning Gibbous
- Full
- Waxing Gibbous
- First Quarter
- Waxing Crescent

To get the current lunar phase from the `LUNAR_PHASE` enum (ex: "Full")

```js
const date = new Date();
const phase = getLunarPhase(date);
```

To get the lunar age (ex: 16.54412413414952)

```js
const date = new Date();
const phase = getLunarAge(date);
```

To get the percentage through the lunar cycle (ex: 0.5602368519132597):

```js
const date = new Date();
const phase = getLunarAgePercent(date);
```

Whether the moon is waxing (ex: false):

```js
const date = new Date();
const phase = isWaxing(date);
```

Whether the moon is waning (ex: true):

```js
const date = new Date();
const phase = isWaning(date);
```

To get the current Julian date (ex: 2459244.5972259142)

```js
const date = new Date();
const julianDate = getJulianDate(date);
```

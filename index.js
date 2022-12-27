import {
  isWaning,
  isWaxing,
  lunarAge,
  lunarAgePercent,
  lunarDistance,
  lunarPhase,
  lunarPhaseEmoji,
  lunationNumber,
} from "./src/Moon";
import { fromDate } from "./src/JulianDay";

setInterval(() => {
  document.querySelector("#julianDay").innerHTML = fromDate().toFixed(10);
  document.querySelector("#lunarAge").innerHTML = lunarAge().toFixed(10);
  document.querySelector("#lunarAgePercent").innerHTML = lunarAgePercent().toFixed(10);
  document.querySelector("#lunationNumber").innerHTML = lunationNumber();
  document.querySelector("#lunarDistance").innerHTML = lunarDistance().toFixed(10);
  document.querySelector("#lunarPhase").innerHTML = lunarPhase();
  document.querySelector("#lunarPhaseEmoji").innerHTML = lunarPhaseEmoji();
  document.querySelector("#isWaxing").innerHTML = isWaxing();
  document.querySelector("#isWaning").innerHTML = isWaning();
}, 33);

import { Moon } from "./src";
import { Julian } from "./src";

setInterval(() => {
  document.querySelector("#julianDay").innerHTML = Julian.fromDate().toFixed(10);
  document.querySelector("#lunarAge").innerHTML = Moon.lunarAge().toFixed(10);
  document.querySelector("#lunarAgePercent").innerHTML = Moon.lunarAgePercent().toFixed(10);
  document.querySelector("#lunationNumber").innerHTML = Moon.lunationNumber().toFixed(0);
  document.querySelector("#lunarDistance").innerHTML = Moon.lunarDistance().toFixed(10);
  document.querySelector("#lunarPhase").innerHTML = Moon.lunarPhase();
  document.querySelector("#lunarPhaseEmoji").innerHTML = Moon.lunarPhaseEmoji();
  document.querySelector("#isWaxing").innerHTML = Moon.isWaxing();
  document.querySelector("#isWaning").innerHTML = Moon.isWaning();
}, 33);

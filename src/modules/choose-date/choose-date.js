import randomNumber from "../helpers/random-number.js";

import chooseInEvent from "../date-events/date-in/date-in.scripts";
import chooseOutEvent from "../date-events/date-out/date-out.scripts";

const settingOptions = ["In", "Out"];

const chooseDate = () => {
  const setting = settingOptions[randomNumber(0, settingOptions.length)];
  const event = setting === "In" ? chooseInEvent() : chooseOutEvent();
  const date = { setting, ...event };
  console.log(date);
  return date;
};

export default chooseDate;

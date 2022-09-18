import randomNumber from "../../helpers/random-number.js";

const outActivityOptions = [
  "Hatchet Harry's 🪓",
  "Minigolf ⛳️",
  "Lane7 🎳",
  "Walk 🚶‍♂️",
];
const outFoodOptions = [
  "Thali Tray 🍽",
  "Geisha 🍽",
  "Aveika 🍽",
  "Lola Jeans 🍽",
  "Vegano 🍽",
  "Shijo Cafe 🍽",
  "Veganatomy 🍽",
  "Gingerino's 🍽",
  "Simla 🍽",
  "Pizza Punks 🍽",
  "Chaophraya 🍽",
];
const outCombinedOptions = [
  "Lane7 🎳 🍔",
  "Minigolf ⛳️ 🍔",
  "Point Blank 🔫 🍔",
  "Discovery Museum and Pablo ⛴ 🍔",
];

const chooseOutEvent = () => {
  const option = randomNumber(0, 3);
  const event = {
    activity: "n/a",
    food: "n/a",
    both: false,
  };
  if (option === 0) {
    event.activity =
      outActivityOptions[randomNumber(0, outActivityOptions.length)];
    return event;
  }
  if (option === 1) {
    event.food = outFoodOptions[randomNumber(0, outFoodOptions.length)];
    return event;
  }
  event.activity =
    outCombinedOptions[randomNumber(0, outCombinedOptions.length)];
  event.both = true;
  return event;
};

export default chooseOutEvent;

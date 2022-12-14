import randomNumber from "../helpers/random-number.js";

const outActivityOptions = [
  "Hatchet Harry's πͺ",
  "Minigolf β³οΈ",
  "Lane7 π³",
  "Walk πΆββοΈ",
];
const outFoodOptions = [
  "Thali Tray π½",
  "Geisha π½",
  "Aveika π½",
  "Lola Jeans π½",
  "Vegano π½",
  "Shijo Cafe π½",
  "Veganatomy π½",
  "Gingerino's π½",
  "Simla π½",
  "Pizza Punks π½",
  "Chaophraya π½",
];
const outCombinedOptions = [
  "Lane7 π³ π",
  "Minigolf β³οΈ π",
  "Point Blank π« π",
  "Discovery Museum and Pablo β΄ π",
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

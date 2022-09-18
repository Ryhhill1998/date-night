import randomNumber from "../../helpers/random-number.js";

const inActivityOptions = ["Film 🎬", "Series 📺"];
const inFoodOptions = ["Takeaway 🥡", "Cook 👩‍🍳"];

const chooseInEvent = () => {
  const activity = inActivityOptions[randomNumber(0, inActivityOptions.length)];
  const food = inFoodOptions[randomNumber(0, inFoodOptions.length)];
  return {
    activity,
    food,
    both: false,
  };
};

export default chooseInEvent;

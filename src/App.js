import { useState } from "react";
import "./App.scss";

const App = () => {
  const settingOptions = ["In", "Out"];

  const inActivityOptions = ["Film", "Series"];
  const inFoodOptions = ["Takeaway", "Cook"];

  const outActivityOptions = [
    "Hatchet Harry's",
    "Minigolf",
    "Lane7",
    "Museum",
    "Walk",
  ];
  const outFoodOptions = ["Italian", "Chinese"];
  // const outActivitiesAndFood = ["Lane7", "Minigolf", "Point Blank"];

  const [dateSetting, setDateSetting] = useState("");

  const [event, setEvent] = useState("");

  const randomNumber = (inclStart, exclEnd) => {
    return Math.floor(Math.random() * (exclEnd - inclStart)) + inclStart;
  };

  const chooseInEvent = () => {
    const activity =
      inActivityOptions[randomNumber(0, inActivityOptions.length)];
    const food = inFoodOptions[randomNumber(0, inFoodOptions.length)];
    const event = `${activity} and ${food}`;
    setEvent(event);
  };

  const chooseOutEvent = () => {
    const activity =
      outActivityOptions[randomNumber(0, outActivityOptions.length)];
    const food = outFoodOptions[randomNumber(0, outFoodOptions.length)];
    const event = `${activity} and ${food}`;
    setEvent(event);
  };

  const chooseDate = () => {
    const setting = settingOptions[randomNumber(0, settingOptions.length)];
    setDateSetting(setting);
    setting === "In" ? chooseInEvent() : chooseOutEvent();
  };

  return (
    <div className="App">
      <h1>DATENIGHT</h1>
      <button className="search-btn" type="submit" onClick={chooseDate}>
        Generate Date
      </button>
      <h2>{dateSetting ? `Setting: ${dateSetting}` : ""}</h2>
      <h2>{event ? `Event: ${event}` : ""}</h2>
    </div>
  );
};

export default App;

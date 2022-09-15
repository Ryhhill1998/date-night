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
  const outCombinedOptions = ["Lane7", "Minigolf", "Point Blank"];

  const [dateSetting, setDateSetting] = useState("");

  const [event, setEvent] = useState("");

  const randomNumber = (inclStart, exclEnd) => {
    return Math.floor(Math.random() * (exclEnd - inclStart)) + inclStart;
  };

  const chooseInEvent = () => {
    const activity =
      inActivityOptions[randomNumber(0, inActivityOptions.length)];
    const food = inFoodOptions[randomNumber(0, inFoodOptions.length)];
    const event = `Activity: ${activity} and ${food}`;
    setEvent(event);
  };

  const chooseOutEvent = () => {
    const option = randomNumber(1, 4);
    let event;
    switch (option) {
      case 1:
        event = "Activity: ";
        event += outActivityOptions[randomNumber(0, outActivityOptions.length)];
        break;

      case 2:
        event = "Food: ";
        event += outFoodOptions[randomNumber(0, outFoodOptions.length)];
        break;

      case 3:
        event = "Activity and Food: ";
        event += outCombinedOptions[randomNumber(0, outCombinedOptions.length)];
        break;

      default:
        break;
    }

    setEvent(event);
  };

  const chooseDate = () => {
    const setting = settingOptions[randomNumber(0, settingOptions.length)];
    setDateSetting(setting);
    setting === "In" ? chooseInEvent() : chooseOutEvent();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="title-container">
          <h1>DATENIGHT</h1>
        </div>
        <div className="main-container">
          <h2 className="date-details">
            {dateSetting ? `Setting: ${dateSetting}` : ""}
          </h2>
          <h2 className="date-details">{event}</h2>
          <button className="search-btn" type="submit" onClick={chooseDate}>
            Generate Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

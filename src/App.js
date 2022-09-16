import { useState } from "react";
import "./App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const settingOptions = ["In", "Out"];

  const inActivityOptions = ["Film", "Series"];
  const inFoodOptions = ["Takeaway", "Cook"];

  const outActivityOptions = ["Hatchet Harry's", "Minigolf", "Lane7", "Walk"];
  const outFoodOptions = [
    "Thali Tray",
    "Geisha",
    "Aveika",
    "Lola Jeans",
    "Vegano",
    "Shijo Cafe",
    "Veganatomy",
    "Gingerino's",
    "Simla",
    "Pizza Punks",
    "Chaophraya",
  ];
  const outCombinedOptions = [
    "Lane7",
    "Minigolf",
    "Point Blank",
    "Discovery Museum and Pablo",
  ];

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
    setDateSetting("Setting: " + setting);
    setting === "In" ? chooseInEvent() : chooseOutEvent();
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="col">
          <div className="row">
            <h1 className="title">
              <FontAwesomeIcon icon={faCloudMoon} />
              <span className="title__date">DATE</span>
              <span className="title__night">NIGHT</span>
            </h1>
          </div>

          <div className="row">
            <h2 className="date-details">{dateSetting}</h2>
          </div>

          <div className="row">
            <h2 className="date-details">{event}</h2>
          </div>

          <div className="row">
            <button className="search-btn" type="submit" onClick={chooseDate}>
              Generate Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

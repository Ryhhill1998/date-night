import { useState } from "react";
import "./App.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faGear,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [dateSetting, setDateSetting] = useState("");
  const [activity, setActivity] = useState("");
  const [food, setFood] = useState("");

  const resetActivity = () => setActivity("n/a");
  const resetFood = () => setFood("n/a");

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

  const randomNumber = (inclStart, exclEnd) => {
    return Math.floor(Math.random() * (exclEnd - inclStart)) + inclStart;
  };

  const chooseInEvent = () => {
    resetActivity();
    resetFood();

    const activity =
      inActivityOptions[randomNumber(0, inActivityOptions.length)];
    const food = inFoodOptions[randomNumber(0, inFoodOptions.length)];
    setActivity(activity);
    setFood(food);
  };

  const chooseOutEvent = () => {
    resetActivity();
    resetFood();

    const option = randomNumber(0, 3);
    if (option === 0) {
      setActivity(
        outActivityOptions[randomNumber(0, outActivityOptions.length)]
      );
      return;
    }
    if (option === 1) {
      setFood(outFoodOptions[randomNumber(0, outFoodOptions.length)]);
      return;
    }
    setActivity(outCombinedOptions[randomNumber(0, outCombinedOptions.length)]);
  };

  const chooseDate = () => {
    const setting = settingOptions[randomNumber(0, settingOptions.length)];
    setDateSetting(setting);
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
            <label>SETTING</label>
            <input
              className="date-details setting"
              value={dateSetting}
              readOnly
            ></input>
          </div>

          <div className="row">
            <label>ACTIVITY</label>
            <input
              className="date-details activity"
              value={activity}
              readOnly
            ></input>
          </div>

          <div className="row">
            <label>FOOD</label>
            <input className="date-details food" value={food} readOnly></input>
          </div>

          <div className="row">
            <div className="btn-container">
              <button
                className="btn search-btn"
                type="button"
                onClick={chooseDate}
              >
                Generate Date{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
              </button>
              <button
                className="btn settings-btn"
                type="button"
                onClick={() => {}}
              >
                <FontAwesomeIcon className="icon" icon={faGear} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

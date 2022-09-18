import { useState } from "react";

import chooseDate from "../../modules/choose-date/choose-date.js";
import Input from "../input/input.component.jsx";
import Button from "../button/button.component.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faGear,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

import "./date-generator.styles.scss";

const defaultDateValues = {
  setting: "",
  activity: "",
  food: "",
};

const Form = () => {
  const [dateValues, setDateValues] = useState(defaultDateValues);
  const { setting, activity, food } = dateValues;

  const randomiseDateDetails = () => {
    const date = chooseDate();
    setDateValues(date);
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

          <Input
            label="SETTING"
            inputOptions={{
              className: "date-details setting",
              value: setting,
              readOnly: true,
            }}
          ></Input>

          <Input
            label="ACTIVITY"
            inputOptions={{
              className: "date-details setting",
              value: activity,
              readOnly: true,
            }}
          ></Input>

          <Input
            label="FOOD"
            inputOptions={{
              className: "date-details setting",
              value: food,
              readOnly: true,
            }}
          ></Input>

          <div className="row">
            <div className="btn-container">
              <Button
                buttonOptions={{
                  className: "btn search-btn",
                  type: "button",
                  onClick: randomiseDateDetails,
                }}
              >
                Generate Date{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
              </Button>
              <Button
                buttonOptions={{
                  className: "btn settings-btn",
                  type: "button",
                  onClick: () => {},
                }}
              >
                <FontAwesomeIcon className="icon" icon={faGear} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

import { useState } from "react";

import chooseDate from "../../modules/date-generator/choose-date.js";
import Input from "../input/input.component.jsx";
import Button from "../button/button.component.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "./date-generator.styles.scss";

const defaultDateValues = {
  setting: "",
  activity: "",
  food: "",
  both: false,
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
            <Input
              label="SETTING"
              inputOptions={{
                className: "date-details setting",
                value: setting,
                readOnly: true,
              }}
            ></Input>
          </div>

          <div className="row">
            <Input
              label="ACTIVITY"
              inputOptions={{
                className: "date-details setting",
                value: activity,
                readOnly: true,
              }}
            ></Input>
          </div>

          <div className="row">
            <Input
              label="FOOD"
              inputOptions={{
                className: "date-details setting",
                value: food,
                readOnly: true,
              }}
            ></Input>
          </div>

          <div className="row">
            <div className="btn-container">
              <Button
                buttonOptions={{
                  className: "btn search-btn",
                  type: "button",
                  onClick: randomiseDateDetails,
                }}
              >
                Generate{" "}
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

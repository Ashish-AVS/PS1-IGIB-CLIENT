import classes from "./card.module.css";
import { Radio } from "antd";

const Card = (props) => {
  return (
    // console.log(props),
    <>
      <div className={classes["card"]} style={{ width: props.width }}>
        <label>
          <img
            src={props.imgsrc}
            alt="myPic"
            className={classes["card__img"]}
            style={{ height: props.imageheight }}
          />
          <div>
            <div className={classes["card__info"]}>
              <Radio value={props.option.replace(/ /g, "") + props.i}>
                <span style={{ fontSize: "1.3rem" }}>{props.option}</span>
              </Radio>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default Card;

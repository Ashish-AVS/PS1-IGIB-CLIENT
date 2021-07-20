import classes from "./card.module.css";
import React, { Suspense } from "react";
import { Radio } from "antd";
import { SuspenseImg } from "../SuspenseImage/SuspenseImage";

const Card = (props) => {
  return (
    // console.log(props),
    <>
      <div className={classes["card"]} style={{ width: props.width }}>
        <div>
          {/* <img src= {`${process.env.PUBLIC_URL}/New_Pictures/${props.singleImg}.jpg`} style={{width: "98%"}}/> */}
        </div>
        <label>
          {/* <img
            src={props.imgsrc}
            alt="myPic"
            className={classes["card__img"]}
            style={{ height: props.imageheight }}
          /> */}
          <Suspense fallback={<p>Loading..</p>}>
            <SuspenseImg
              src={props.imgsrc}
              alt="myPic"
              className={classes["card__img"]}
              style={{ height: props.imageheight }}
            />
          </Suspense>
          <div>
            <div className={classes["card__info"]}>
              <Radio value={props.option.replace(/ /g, "") + props.i}>
                <span style={{ fontSize: "18px" }}>{props.option}</span>
              </Radio>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default Card;

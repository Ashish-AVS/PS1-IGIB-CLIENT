import React from "react";
import { Radio } from "antd";
import classes from "./Lesions.module.css";

import { dataList } from "../../utils/dataList";
import Card from "../Card/Card";


export default function Lesions(props) {
  const { current, radioHandler, next_clinical, showModal } = props;

      const radioChange = (e) => {
        radioHandler(dataList[current].heading, e);
        if(current !== dataList.length - 1)
        setTimeout(() => {
          next_clinical();
        }, 700); 

        if(current === dataList.length - 1)
        showModal();
      }

  return (
    <>
      <div className={classes.wrapper}>
        <div id={classes["head"]} className={classes["items"]}>
          {dataList[current].heading}
        </div>
        <div id={classes["container"]} className={classes["items"]}>
        <Radio.Group
             onChange={(e) => {
              radioChange(e);
             }}
          >
          {dataList[current].imgs.map((file_name, index) => (
            <Card
            width={dataList[current].size}
            cardheight={dataList[current].cardheight}
            imageheight={dataList[current].imageheight}
            imgsrc= {`${process.env.PUBLIC_URL}/New_Pictures/${file_name}.jpg`}
            option={dataList[current].opt[index]}
            i = {index}
            radioChange ={radioChange}
            />
            
            ))}
        </Radio.Group>
          <div className={classes["title"]}>{dataList[current].title}</div>
        </div>
      </div>
    </>
  );
}
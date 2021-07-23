import React from "react";
import { Radio } from "antd";
import classes from "./Lesions.module.css";
import { dataList } from "../../utils/dataList";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";


export default function Lesions(props) {
  const { t } = useTranslation()
  const {current, radioHandler, next_clinical, showModal, radioData } = props;
  const radioChange = (e) => {
    radioHandler(dataList[current].heading, e);
    if (current !== dataList.length - 1)
      next_clinical();


    if (current === dataList.length - 1) showModal();
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div id={classes["head"]} className={classes["items"]}>
          {t(dataList[current].heading.replace(/ /g, ""))}
        </div>
        <div id={classes["container"]} className={classes["items"]}>
          <Radio.Group
            onChange={(e) => {
              radioChange(e);
            }}
            value={radioData[dataList[current].heading.replace(/ /g, "")]}
          >
            {dataList[current].imgs.map((file_name, index) => (
              <Card
                width={dataList[current].size[index]}
                cardheight={dataList[current].cardheight}
                imageheight={dataList[current].imageheight}
                imgsrc={`${process.env.PUBLIC_URL}/New_Pictures/${file_name}.jpg`}
                option={dataList[current].opt[index]}
                i={index}
                key={index}
              />
            ))}
          </Radio.Group>
        </div>
      </div>
    </>
  );
}

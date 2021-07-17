import React, { useState, useEffect} from "react";
import { dataList } from "../../utils/dataList";
import { useHistory } from 'react-router-dom'

import {
  Form,
  Button,
  Modal,
} from "antd";

import Lesions from "../Lesions/Lesions";

const PatientForm = () => {
  const [data, setData] = useState();
  const [radioData, setRadioData] = useState({});

  const [current, setCurrent] = useState(1);
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    async function postData(url = "http://127.0.0.1:5000/") {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const patientData = await response.json();
      console.log("response from the server", patientData);
      let str = `${patientData.id}`;
      history.replace(`/summary/${str}`);
    }
    if (data) {
      postData(`http://127.0.0.1:5000/patient/299`).then((data) => {
        console.log("data", data); // JSON data parsed by `data.json()` call
      });
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps


  const onFinish = () => {
    // console.log(scorerRef.current.state.value);
    const temp = {
      ClinicalFeatures: radioData,
    };
    setData(temp);
    // history.push('/summary');
    console.log("You Submitted: ", temp);
  };

  const next_clinical = () => {
    setCurrent((e) => e + 1);
    setChecked(true);
    // this.add.bind(this);
  };

  const pre_clinical = () => {
    setCurrent((e) => e - 1);
    // console.log(current);
    if (current !== 2) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    // this.add.bind(this);
  };

const radioHandler = (heading, e) => {
  setRadioData((prevState) => {
    prevState[heading.replace(/ /g, "")] = e.target.value;
    setChecked(false);
    return prevState;
  });
  // console.log(radioData);
};


// MODAL SUBMISSION
const showModal = () => {
  setModalVisible(true);
};
const onClose = () => {
  setModalVisible(false);
};
const onOk = () => {
  setModalVisible(false);
  form.submit();
};
const submitButton = (
  <Modal
    title="Basic Modal"
    visible={modalVisible}
    onOk={onOk}
    onCancel={onClose}
  >
    <div>  
      <h2>Do You wish to Submit?</h2>
    </div>
  </Modal>
);

return (
  <>
    <Form style={{ overflow: "auto" }} onFinish={onFinish} form={form}>
      <Lesions current={current} radioHandler={radioHandler} next_clinical={next_clinical} showModal={showModal} />

      {current === dataList.length - 1 && (
        <>
          {submitButton}
          <Button type="danger" 
          onClick={showModal} style={{
          position: "relative",
          bottom: "0%",
          left: "83%",
          width: "auto",
          marginBottom: "1%",
        }}
        disabled={checked}
        >
            Submit
          </Button>
        </>
      )}

      <div
        style={{
          position: "relative",
          bottom: "0%",
          left: "83%",
          width: "16%",
        }}
      >
        {current !== 1 && <Button onClick={pre_clinical}>Previous</Button>}
        &nbsp;&nbsp;&nbsp;

        {current !== dataList.length - 1}
      </div>
    </Form>
  </>
);
}
export default PatientForm;

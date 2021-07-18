import React, { useState, useEffect } from "react";
import { dataList } from "../../utils/dataList";
import { useHistory } from "react-router-dom";

import { Form, Button, Modal, message, Alert } from "antd";

import Lesions from "../Lesions/Lesions";

const PatientForm = ({ current, setCurrent, radioData, setRadioData }) => {
  const [data, setData] = useState();
  const history = useHistory();
  const [checked, setChecked] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const success = () => {
    message.success("Form Submitted successfully!");
  };
  useEffect(() => {
    async function postData(url = "https://ps1-igib.herokuapp.com/") {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const patientData = await response.json();
      let str = `${patientData.id}`;
      history.replace(`/summary/${str}`);
    }
    if (data) {
      postData(`https://ps1-igib.herokuapp.com/patient/299`).then((data) => {
        success();
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
  };

  const next_clinical = () => {
    setCurrent((e) => e + 1);
    // this.add.bind(this);
  };

  const pre_clinical = () => {
    setCurrent((e) => e - 1);
  };

  const radioHandler = (heading, e) => {
    setRadioData((prevState) => {
      prevState[heading.replace(/ /g, "")] = e.target.value;
      return prevState;
    });
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
  const submitModal = (
    <Modal
      title="Confirmation"
      visible={modalVisible}
      onOk={onOk}
      onCancel={onClose}
    >
      <div>
        <h2>Do You wish to Submit?</h2>
        <Alert
          message="Are you sure that you have selected all options?"
          type="error"
        />
      </div>
    </Modal>
  );

  return (
    <>
      <Form style={{ overflow: "auto" }} onFinish={onFinish} form={form}>
        <Lesions
          current={current}
          radioHandler={radioHandler}
          next_clinical={next_clinical}
          showModal={showModal}
          radioData={radioData}
          setChecked={setChecked}
        />

        {current === dataList.length - 1 && (
          <>
            {submitModal}
            <Button
              onClick={showModal}
              style={{
                position: "relative",
                bottom: "0%",
                left: "83%",
                width: "auto",
                marginBottom: "1%",
                backgroundColor: "red",
                color: "#fff",
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
            margin: "0"
          }}
        >
          {current !== 1 && <Button onClick={pre_clinical}>Previous</Button>}
          &nbsp;&nbsp;&nbsp;
          {current !== dataList.length - 1 && (
            <Button disabled={checked} type="primary" onClick={next_clinical}>
              Next
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};
export default PatientForm;

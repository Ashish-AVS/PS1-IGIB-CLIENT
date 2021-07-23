import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Layouts from "./containers/MainLayout/Layouts";
import Summary from "./components/Summary/Summary";
import "./App.css";
import PatientForm from "./components/PatientForm/PatientForm";

const App = () => {
  const [current, setCurrent] = useState(1);
  const [radioData, setRadioData] = useState({});
  console.log("Hello", window.location.host)
  return (
    <>
      <Layouts
        current={current}
        setCurrent={setCurrent}
        setRadioData={setRadioData}
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/form">
            <PatientForm
              current={current}
              setCurrent={setCurrent}
              radioData={radioData}
              setRadioData={setRadioData}
            />
          </Route>

          {/* <Route exact path="/genomics">
            <Genomics />
          </Route> */}

          <Route exact path="/summary/:id" component={Summary}></Route>
        </Switch>
      </Layouts>
    </>
  );
};

export default App;

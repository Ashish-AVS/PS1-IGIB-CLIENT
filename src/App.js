import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Genomics from "./components/Genomics/Genomics";
import Layouts from "./containers/MainLayout/Layouts";
import Summary from "./components/Summary/Summary";
import "./App.css";
import PatientForm from "./components/PatientForm/PatientForm";

const App = () => {
  return (
    <>
      <Layouts>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/form">
            <PatientForm />
          </Route>

          <Route exact path="/genomics">
            <Genomics />
          </Route>

          <Route exact path="/summary/:id" component={Summary}></Route>
        </Switch>
      </Layouts>
    </>
  );
};

export default App;

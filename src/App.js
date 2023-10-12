import React, { useContext } from "react";
import "./styles.css";

import Stepper from "react-stepper-horizontal";
import SenderAddress from "./components/SenderAddress";
import RecevierAddress from "./components/RecevierAddress";
import Confirmation from "./components/Confirmation";
import GetWeight from "./components/GetWeight";
import ShippingOption from "./components/ShippingOption";
import Printonly from "./components/PrintOnly";
import { LabelContext } from "./labelDataContext";

const App = (props) => {
  const value = useContext(LabelContext);
  return (
    <div className="App">
      {value.page !== 4 && (
        <Stepper steps={value.steps} activeStep={value.page} />
      )}
      {/* {value.page === 0 && <SenderAddress />} */}
      {value.page === 0 && <RecevierAddress />}
      {value.page === 1 && <GetWeight />}
      {value.page === 2 && <ShippingOption />}
      {value.page === 3 && <Confirmation />}
      {value.page === 4 && <Printonly />}
    </div>
  );
};
export default App;

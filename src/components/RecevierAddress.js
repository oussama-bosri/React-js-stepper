import React, { useContext, useState, useEffect } from "react";
import { LabelContext } from "../labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const RecevierAddress = (props) => {
  const value = useContext(LabelContext);
  
  const [defaultData, setDefaultData] = useState(null);

  useEffect(() => {
    // Fetch default data from your API
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setDefaultData(data);
      })
      .catch((error) => {
        console.error("Error fetching default data:", error);
      });
  }, []);

  const recevier = value.labelInfo.recevier;
  const btnDisabled =
    recevier.name.length > 0 &&
    recevier.city.length > 0 &&
    recevier.zipCode.length > 0 &&
    recevier.city.length > 0;

  return (
    <form>
      <h4> User Information</h4>
      <TextField
        label="Enter Full Name"
        style={{ margin: 8, width: "93%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setRecevierInfo("name")}
        value={recevier.name || (defaultData && defaultData.name) || ""}
      />
      <TextField
        label="Enter Street Address"
        style={{ margin: 8, width: "93%" }}
        fullWidth
        margin="normal"
        required
        onChange={value.setRecevierInfo("street")}
        value={recevier.street || (defaultData && defaultData.address.street) || ""}
      />
      <div>
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="Enter City"
          onChange={value.setRecevierInfo("city")}
          value={recevier.city || (defaultData && defaultData.address.city) || ""}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="Enter State"
          onChange={value.setRecevierInfo("state")}
          value={recevier.state || (defaultData && defaultData.address.city) || ""}
        />
        <TextField
          required
          style={{ width: "31%", margin: 1 }}
          label="Enter ZipCode"
          onChange={value.setRecevierInfo("zipCode")}
          /* type="number" */
          value={recevier.zipCode || (defaultData && defaultData.address.zipcode) || ""}
        />
      </div>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
        <Button
          disabled={btnDisabled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
  
};

export default RecevierAddress;

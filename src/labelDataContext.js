import React, { useState, createContext } from "react";

export const LabelContext = createContext();

export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  const [labelInfo, setlabelInfo] = useState({
    sender: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    recevier: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    weight: "",
    shippingOption: "1"
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");
  const handleChange = (prop) => (event) => {
    setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  };

  const setSenderInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [prop]: event.target.value }
    });
  };
  const setRecevierInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      recevier: { ...labelInfo.recevier, [prop]: event.target.value }
    });
  };
  const steps = [
    { title: "Get Sender addrtess" },
    { title: "Get Reciver addrtess" },
    { title: "Get Weight" },
    { title: "Get Shipping Option" },
    { title: "confirm" }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setSenderInfo,
        setRecevierInfo
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};

import React from "react";
import data from "../Data.json";
import Acc_page from "./Acc_page";

const Accordion = () => {
  console.log(data.faqs);
  return (
    <>
      <h1>Accordion</h1>
      <div className="">
        {data.faqs.map((item, i) => {
          return <Acc_page key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default Accordion;

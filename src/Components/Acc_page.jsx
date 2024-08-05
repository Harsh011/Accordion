import React from "react";

const Acc_page = ({ item }) => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="accordion">
      <h3>
        {item.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </h3>
      {show ? <p>{item.answer}</p> : ""}
    </div>
  );
};

export default Acc_page;

import React from "react";

const Modal = ({ children }) => {
  return (
    <section
      className=" p-4 m-3 rounded-xl lg:mt-20 lg:w-[40%]"
      style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
    >
      {children}
    </section>
  );
};

export default Modal;

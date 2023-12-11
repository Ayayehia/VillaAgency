import React from "react";

const Modal = ({ children, newwidth }) => {
  // { `p-4 m-3 rounded-xl lg:mt-20 ${newwidth}? lg:w-[100%]: lg:w-[40%]`}
  return (
    <section
      className={`bg-white p-4 m-3 rounded-xl lg:mt-20 ${
        newwidth ? "lg:w-[100%]" : "lg:w-[40%]"
      }`}
      style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
    >
      {children}
    </section>
  );
};

export default Modal;

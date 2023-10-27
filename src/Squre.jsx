import React from "react";

const Squre = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section className="squre" style={{ backgroundColor: hexValue || colorValue,
    color: isDarkText ? "#FFF" : "#000"
    }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Squre.defaultProps = {
  colorValue: "Empty color value",
};

export default Squre;

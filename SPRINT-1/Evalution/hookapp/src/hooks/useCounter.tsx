import React from "react";
export const useCounter = (init: number) => {
  const [value, usecounter1] = React.useState(init);

  const inc = (x: number) => {
    usecounter1(value + x);
  };

  const dec = (x: number) => {
    usecounter1(value - x);
  };

  const set = (x: number) => {
    usecounter1(x);
  };

  return { value, inc, dec, set };
};
//If in dev and in isolation, call mount immediately
//export in rest of cases

import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hiii</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

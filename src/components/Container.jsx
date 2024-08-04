import React from "react";

function Container({ children }) {
  return <div className="max-w-[1100px] my-0 mx-auto px-6 lg:px-10">{children}</div>;
}

export default Container;
import "./src/styles/index.scss"
const Layout = require("./src/components/Layout").default
import React from "react";

export const wrapPageElement = ({ element, ...restProps }, ...args) => {
    return (
      // <Layout name="wrapPageElement" props={{}} args={args} mode="browser">
      <Layout
        name="wrapPageElement"
        props={restProps}
        args={args}
        mode="browser"
      >
        {element}
      </Layout>
    );
  };
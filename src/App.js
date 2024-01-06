import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const app = () => {
  return (
    <div>
      <h1>GPT-3</h1>
    </div>
  );
};

export default app;

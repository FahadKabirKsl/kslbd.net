import React, { useEffect } from "react";
import ServiceIndex from "./ServiceIndex";
import Index from "./Index";

import BankDetails from "./BankDetails";
import Subscribe from "../Subscribe";

function ServiceMAinsection() {
  return (
    <>
      <ServiceIndex />
      <Index />
      <BankDetails />
      <Subscribe />
    </>
  );
}

export default ServiceMAinsection;

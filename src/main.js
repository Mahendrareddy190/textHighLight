import React from "react";
import TextRecords from "./components/Text_records";
import Annotations from "./components/Annotations";
import Records from "./components/Records";
const main = () => {
  return (
    <div className="container-fluid">
      <div className="row m-2">
        <div className="col-md-3 col-lg-3 col-sm">
          <Records />
        </div>
        <div className="col-md-4 col-lg-6 col-sm">
          <TextRecords />
        </div>
        <div className="col-md-3 col-lg-3 col-sm">
          <Annotations />
        </div>
      </div>
    </div>
  );
};

export default main;

import mosakin from "../../static/mosakin.png";
import React from "react";

export const NotFoundPage: React.FC = () => {
  return (
    <section>
      <p>Not Found</p>
      <img src={mosakin}></img>;
    </section>
  );
};

import React from "react";
import { TopBaner, Roll, Showcase } from "../../components";
import { SliderData } from "../../assets/SliderData";
import ShowcaseDB from "../../assets/ShowcaseDB.json";

export default function Home() {
  return (
    <>
      <TopBaner slides={SliderData} />
      <Roll />
      {<Showcase showcase={ShowcaseDB} />}
    </>
  );
}

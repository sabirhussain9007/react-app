import React from "react";
import ButtonSection from "./ButtonSection";
import ImageSection from "./ImageSection";
import "./BurgerComponent.css"; // Import main component CSS

export default function Component() {
  return (
    <>
      <div className="vc_row ...">
        <ButtonSection />
        <ImageSection />
      </div>
    </>
  );
}

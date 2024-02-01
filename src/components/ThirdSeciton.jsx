import React from "react";
import "../styles/thirdsection.css";
import whatwedo from "../images/whatwedo.png";

function ThirdSeciton() {
  return (
    <div className="thirdSectinContainer">
      <div className="thirdsecitonContent">
        <img src={whatwedo} />
        <div className="textContent">
          <div className="forh1andh2">
            <h1>What We Do ... ?</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              asperiores impedit quos vel fugit, error quaerat necessitatibus
              culpa, veniam minima aliquid ad exercitationem obcaecati dolorem
              iure, quo ipsam adipisci. Veritatis.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSeciton;

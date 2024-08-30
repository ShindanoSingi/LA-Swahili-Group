import React from "react";
import "./Spinner.css";
import { CirclesWithBar } from "react-loader-spinner";

function Spinner() {
      return (
            <div>
                  <CirclesWithBar
                        height="40"
                        width="40"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                  />
            </div>
      );
}

export default Spinner;

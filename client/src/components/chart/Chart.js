import React from "react";
import { Gauge } from "@mui/x-charts/Gauge";

function Chart({ val }) {
      return (
            <Gauge
                  value={val}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="50%"
                  outerRadius="100%"
                  style={{ width: "40%", height: "40%" }}
            />
      );
}

export default Chart;

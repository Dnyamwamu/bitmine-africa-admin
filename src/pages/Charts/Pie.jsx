import React from "react"

import { pieChartData } from "../../data/dummy"
import { ChartsHeader, Pie as PieChart } from "../../components"

const Pie = () => (
  <div className="m-2 md:m-2 p-5 bg-slate-800  rounded-2xl">
    <ChartsHeader category="Pie" />
    <div className="w-full">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="full"
      />
    </div>
  </div>
)

export default Pie

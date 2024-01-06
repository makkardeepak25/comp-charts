import React from "react";
import { AgGridReact } from "ag-grid-react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Dashboard = ({ missionsData }) => {
  const columns = [
    { headerName: "Mission", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Date", field: "date" },
    { headerName: "Time", field: "time" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Successful", field: "successful" },
  ];

  const successfulMissionsCount = missionsData.filter(
    (mission) => mission?.successful
  )?.length;
  // const successfulMissionsCountPer =
  //   (successfulMissionsCount / missionsData?.length).toFixed(2) * 100;
  const unsuccessfulMissionsCount =
    missionsData?.length - successfulMissionsCount;
  // const unSuccessfulMissionsCountPer =
  //   (unsuccessfulMissionsCount / missionsData?.length).toFixed(2) * 100;
  // const pieChartData = [
  //   { name: "Successful", value: successfulMissionsCountPer },
  //   { name: "Unsuccessful", value: unSuccessfulMissionsCountPer },
  // ];
  const totalMissions = successfulMissionsCount + unsuccessfulMissionsCount;
  const successPercentage = (successfulMissionsCount / totalMissions) * 100;
  const unsuccessPercentage = 100 - successPercentage;

  const pieChartData = [
    { name: "Successful", value: successPercentage },
    { name: "Unsuccessful", value: unsuccessPercentage },
  ];

  return (
    <div className="flex items-center justify-between w-full p-5">
      <div
        className="mb-5 ag-theme-alpine"
        style={{ height: "700px", width: "40%" }}
      >
        <AgGridReact columnDefs={columns} rowData={missionsData} />
      </div>
      <div
        style={{ padding: "20px" }}
        className="flex flex-col items-center gap-5 p-5"
      >
        <h2 className="font-bold text-center ">
          Missions by Status
        </h2>
        <PieChart width={700} height={400}>
          <Pie
            dataKey="value"
            data={pieChartData}
            cx={350}
            cy={200}
            outerRadius={120}
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(2)}%)`
            }
          >
            <Cell fill="#1b0fc4" />
            <Cell fill="#ff2828" />
            <Legend fill="#1b0fc4" />
            <Tooltip />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;

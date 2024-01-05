import React from "react";
import { AgGridReact } from "ag-grid-react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Dashboard = ({ missionsData }) => {
  // Define columns for AG-Grid
  const columns = [
    { headerName: "Mission", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Date", field: "date" },
    { headerName: "Time", field: "time" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Successful", field: "successful" }
  ];

  // Data for Recharts pie chart
  const successfulMissionsCount = missionsData.filter(mission => mission?.successful)?.length;
  const unsuccessfulMissionsCount = missionsData?.length - successfulMissionsCount;
  const pieChartData = [
    { name: "Successful", value: successfulMissionsCount },
    { name: "Unsuccessful", value: unsuccessfulMissionsCount }
  ];

  return (
    <div className="flex items-center justify-between w-full p-5">
      <div className="ag-theme-alpine mb-5 w-1/2" style={{ height: '400px' }}>
        <AgGridReact columnDefs={columns} rowData={missionsData} />
      </div>
      <div style={{ width: "50%", padding: "20px" }} className="flex flex-col gap-5 w-1/2 p-5 items-center">
        <h2 className="font-bold text-center ">Missions Success/Failure Ratio</h2>
        <PieChart width={400} height={300}>
          <Pie dataKey="value" data={pieChartData} cx={200} cy={150} outerRadius={80} fill="#494866" label>
            <Cell fill="#1b0fc4" />
            <Cell fill="#ff2828" />
            <Legend />
            <Tooltip />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;

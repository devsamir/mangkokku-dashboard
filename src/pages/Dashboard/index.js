import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import BarChartHorizontal from "./BarChartHorizontal";
import BarChartVertical from "./BarChartVertical";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import StackBarHorizontal from "./StackBarHorizontal";
import StackBarVertical from "./StackBarVertical";

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-3xl font-light text-gray-700 mb-2">Dashboard</h1>
      {/* BREADCRUMBS */}
      <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
        <Link to="/admin/dashboard">Admin</Link>
        <span>&gt;</span>
        <span>Dashboard</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
        <Card className="col-span-2 lg:col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl md:text-base text-gray-600 mb-4">
            Line Chart
          </h1>
          <div className="h-80 lg:h-72 md:h-64">
            <LineChart />
          </div>
        </Card>
        <Card className="col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl text-gray-600 mb-4">Penjualan Per Product</h1>
          <div className="h-80 lg:h-72 md:h-64">
            <PieChart />
          </div>
        </Card>
        <Card className="col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl md:text-base text-gray-600 mb-4">
            Barchart Vertical
          </h1>
          <div className="h-80 lg:h-72 md:h-64">
            <BarChartVertical />
          </div>
        </Card>
        <Card className="col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl md:text-base text-gray-600 mb-4">
            Barchart Horizontal
          </h1>
          <div className="h-80 lg:h-72 md:h-64">
            <BarChartHorizontal />
          </div>
        </Card>
        <Card className="col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl text-gray-600 mb-4">Stack Bar Vertical</h1>
          <div className="h-80 lg:h-72 md:h-64">
            <StackBarVertical />
          </div>
        </Card>
        <Card className="col-span-1 px-8 py-4 md:px-4 md:py-2">
          <h1 className="text-xl text-gray-600 mb-4">Stack Bar Horizontal</h1>
          <div className="h-80 lg:h-72 md:h-64">
            <StackBarHorizontal />
          </div>
        </Card>
      </div>
      {/* <div className="col-span-1 h-80 lg:h-64 md:h-48">
        <h1 className="text-xl text-gray-600 mb-4">Penjualan Product</h1>
        <BarChart />
      </div>
      <div className="col-span-1 h-80 lg:h-64 md:h-48">
        <h1 className="text-xl text-gray-600 mb-4">Penjualan Per Product</h1>
        <PieChart />
      </div> */}
    </>
  );
};

export default DashboardPage;

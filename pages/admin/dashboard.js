import Sidebar from 'components/Sidebar/Sidebar.js';
import React from 'react';
// import CardLineChart from '../components/Cards/CardLineChart';
import Admin from "../../layouts/Admin.js";

const Dashboard = () => {
    return (
        <>
        <Admin >
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            {/* <CardLineChart /> */}
            <h1>Hello from line chart Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure!</h1>
          </div>
          <div className="w-full xl:w-4/12 px-4">
            {/* <CardBarChart /> */}
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            {/* <CardPageVisits /> */}
          </div>
          <div className="w-full xl:w-4/12 px-4">
            {/* <CardSocialTraffic /> */}
          </div>
        </div>
        </Admin>
      </>
    );
};
Dashboard.layout = Admin;
export default Dashboard;
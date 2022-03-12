import HeaderStats from 'components/Headers/HeaderStats';
import AdminNavbar from 'components/Navbar/AdminNavbar';
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const Admin = ({children}) => {
    const styles = {
        display: "flex",
        flexDirection: "row"
      };
    return (
        <div>
        <Sidebar />
        <div className="relative ml-64 bg-gray-100">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            {children}
            {/* <FooterAdmin /> */}
          </div>
        </div>
      </div>
    );
};

export default Admin;
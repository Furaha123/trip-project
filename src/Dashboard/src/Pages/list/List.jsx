import React from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import "./list.scss";
import DataTable from "../../Components/datatable/DataTable";

function List() {
  return (
    <div className="list">
      <SideBar />
      <div className="listsContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  );
}

export default List;

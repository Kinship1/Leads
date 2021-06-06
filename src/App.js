import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeads } from "./actions/leads";
import Navbar from "./components/Navbar/Navbar";
import { BasicTable } from "./components/LeadsTable/BasicTable";
import { Login } from "./components/Login/Login";
import "./index.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeads());
  }, [isAuthenticated, dispatch]);

  return (
    <div className="mx-auto bg-blue-500 w-full h-screen flex flex-col">
      <Navbar />
      {isAuthenticated ? null : <Login />}
      <BasicTable />
    </div>
  );
};

export default App;

import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:8000/";

export const fetchLeads = (token) => {
  let config = {
    headers: {
      token: token,
    },
  };
  return axios.get(url + "leads/show", config);
};
export const addLeads = (data, token) => {
  let config = {
    headers: {
      token: token,
    },
  };
  return axios.post(url + "leads/add", data, config);
};

export const editLeads = (data, token) => {
  let config = {
    headers: {
      token: token,
    },
  };
  return axios.put(url + "leads/edit", data, config);
};

export const login = (data) => {
  return axios.post(url + "auth/login", data);
};

export const register = (data) => {
  return axios.post(url + "auth/register", data);
};

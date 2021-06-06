import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLeads, addLeads } from "../../actions/leads";
import "./style.css";

export const AddEntry = (props) => {
  console.log(props.content);
  const [state, setState] = useState({
    id: props.content.id,
    name: props.content.name,
    ph_no: props.content.ph_no,
    address: props.content.address,
  });
  const dispatch = useDispatch();
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full max-w-md grid grid-cols justify-items-center">
                <form className="bg-white ">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={state.name}
                        onChange={(e) => {
                          setState({ ...state, name: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="ph_no"
                    >
                      Phone Number
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ph_no"
                        type="text"
                        placeholder="Phone Number"
                        value={state.ph_no}
                        onChange={(e) => {
                          setState({ ...state, ph_no: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="address"
                    >
                      Address
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="Address"
                        value={state.address}
                        onChange={(e) => {
                          setState({ ...state, address: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        dispatch(addLeads(state));
                        props.handleClose();
                        dispatch(getLeads());
                      }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={props.handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/auth";

export const Login = () => {
  const [state, setState] = useState({
    page: "login",
    username: "",
    password: "",
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
                {state.page === "login" ? (
                  <p className="text-red-500 font-bold">Login Here!!</p>
                ) : (
                  <p className="text-red-500 font-bold">Register Here!</p>
                )}
                <form className="bg-white ">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={state.username}
                        onChange={(e) => {
                          setState({ ...state, username: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="*********"
                        value={state.password}
                        onChange={(e) => {
                          setState({ ...state, password: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                  <div className="bg-gray-50 px-2 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
                    {state.page === "login" ? (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                          dispatch(
                            login({
                              username: state.username,
                              password: state.password,
                            })
                          );
                        }}
                      >
                        Login
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => {
                          dispatch(
                            register({
                              username: state.username,
                              password: state.password,
                            })
                          );
                        }}
                      >
                        Register
                      </button>
                    )}
                    {state.page === "login" ? (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-200 text-base font-medium text-gray-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setState({ ...state, page: "register" })}
                      >
                        Register
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-200 text-base font-medium text-gray-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setState({ ...state, page: "login" })}
                      >
                        Sign In
                      </button>
                    )}
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

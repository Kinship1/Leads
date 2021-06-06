export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone No.",
    accessor: "ph_no",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return value.split("T")[0];
    },
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Reward",
    accessor: "reward",
    Cell: ({ value }) => {
      return "$" + value;
    },
  },
  {
    Header: "Edit",
    Cell: () => {
      return "Edit";
    },
  },
];

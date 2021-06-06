export default (leads = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log(action.payload);
      return leads;
    case "EDIT_LEAD": {
      return leads;
    }

    default:
      return leads;
  }
};

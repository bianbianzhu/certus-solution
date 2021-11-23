import axios from "axios";

export const getTransactions = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/transaction`);
};

export const getTransactionsByQuery = (query) => {
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_BACKEND_ENDPOINT}/transaction`,
    headers: {},
    params: {
      ...query,
    },
  };

  return axios(config);
};

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/api/",
});

export default api;

export const get = (url, params, target) => {
  return (dispatch) => {
    return api
      .get(url + params)
      .then((response) => {
        dispatch(target(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const post = (url, json, target) => {
  return (dispatch) => {
    return api
      .post(url, json)
      .then((response) => {
        dispatch(target(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const put = (url, json, target) => {
  return (dispatch) => {
    return api
      .put(url, json)
      .then((response) => {
        if (response.data.data.updated) dispatch(target());
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const del = (url, params, target) => {
  return (dispatch) => {
    return api
      .delete(url + "/" + params)
      .then((response) => {
        if (response.data.data.deleted) dispatch(target());
      })
      .catch((error) => {
        throw error;
      });
  };
};

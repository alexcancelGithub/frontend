import Axios from "axios";

async function authRequestInterceptor(config: any) {
  //   const authResult = await getTokenRedirect();
  //   config.headers.Authorization = `Bearer ${authResult?.accessToken}`;
  config.headers.Accept = "application/json";
  return config;
}

export const foodieApi = Axios.create({
  baseURL: "http://localhost:8081",
});

foodieApi.interceptors.request.use(authRequestInterceptor);
foodieApi.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Server error";
    console.log(message);
    // showToast("error", message);
    return Promise.reject(error);
  }
);

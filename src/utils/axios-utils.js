import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (success) => success;
  const onError = (error) => error;
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

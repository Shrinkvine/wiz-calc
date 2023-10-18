import { Endpoints } from "./constants";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function requestData(
  request: Endpoints,
  payload?: any
): Promise<any> {
  const url = `${BASE_URL}${request}`;

  const options: RequestInit = {
    method: payload ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
}
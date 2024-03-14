import axios from "axios";
import { ACCESS_TOKEN, CHAT_URL } from "./token";

export const test = async () => {
  const res = await axios.post(
    CHAT_URL,
    { messages: [{ role: "user", content: "test" }] },
    { params: { access_token: ACCESS_TOKEN } }
  );
  const { data } = res;
  console.log(data);

  return data;
};

interface AccessToken {
  refresh_token: string;
  expires_in: number;
  session_key: string;
  access_token: string;
  scope: string;
  session_secret: string;
}
export const getAccessToken = async () => {
  const CLIENT_ID = ``;
  const CLIENT_SECRET = ``;
  const url = `https://aip.baidubce.com/oauth/2.0/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`;
  const { data } = await axios.post<AccessToken>(url);
  return data;
};

import axios from "axios";
import { Chatgpt, GptMessage } from "../types";
import { token } from "./token";
/**
 *  主站
 * 	https://faucet.openkey.cloud/
 * 	获取KEY
 */

// const url = "https://openkey.cloud/v1";
const url = "https://openkey.cloud/v1/chat/completions";

export const gpt = async (messages: GptMessage[]) => {
  try {
    const { data } = await axios.post<Chatgpt>(
      url,
      {
        model: "gpt-3.5-turbo",
        // messages: [{ role: "user", content: "你好呀" }],
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data.choices);

    return data;
  } catch (error) {
    console.log(error);
  }
};

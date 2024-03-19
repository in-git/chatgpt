import axios from 'axios';

export const getStarUsers = () => {
  return axios.get<StarUser[]>(
    `https://gitee.com/api/v5/repos/in-git/chat-gpt/stargazers?page=1&per_page=20`,
  );
};

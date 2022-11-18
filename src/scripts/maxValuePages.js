import axios from "axios";

export const maxValuePages = (type, API_TOKEN) => {
  axios({
    url: `https://videocdn.tv/api/${type}?api_token=ximp6vZTpPJo9YXujTO1UHSiIWoApgdI&page=1`,
    headers: {
      API_TOKEN: `${API_TOKEN}`,
    },
    params: {
      page: "1",
      Credential: true,
    },
    method: "get",
  }).then((res) => {
    console.log(res.last_page);
    return res.last_page;
  });
};

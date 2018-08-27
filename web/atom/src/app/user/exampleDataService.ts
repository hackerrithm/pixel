import axios from "axios";

const BASE_URL = "http://localhost:7002";

export namespace exampleDataService {
  export function getColors() {
    const url = `${BASE_URL}/color`;
    return axios.get(url).then(response => response.data);
  }

  export function getBadPassword(token: string) {
    const url = `${BASE_URL}/badPassword`;
    return axios
      .get(url, {
        headers: {
          "X-Auth-Token": token
        }
      })
      .then(response => response.data);

      
  }

  export function getAccount(token: string) {
    const url = `${BASE_URL}/account`;
    return axios
      .get(url, {
        headers: {
          Authorization: 'bearer ' +  token,
          Accept: "application/json"
        }
      })
      .then(response => response.data);
  }
}

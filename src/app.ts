import { BaseClient } from "./webApiClientBase/baseClient";
import { clientHeader } from "./webApiClientBase/interface/request";

class Humanresourse extends BaseClient {
    getUsersMe() {
        const endPoint: string = "/hr/api/v1/users/me";
        return this.apiCall(endPoint);
    }
}

const header: clientHeader = {
    accept: "application / json",
    Authorization: "Bearer",
    "FREEE-VERSION": "2022-02-01"
}

const client: Humanresourse = new Humanresourse("https://api.freee.co.jp", header);
client.getUsersMe()
    .then((res) => {
        console.log(res); // JSON形式のレスポンスが連想配列として表示される
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
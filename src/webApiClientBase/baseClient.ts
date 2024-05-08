import { bodyParam, FetchRequest, clientHeader, queryParam, fetchResponse } from "./interface/request";

export class BaseClient {
    baseUrl: string;
    clientHeader: clientHeader

    constructor(baseUrl: string, clientHeader: clientHeader) {
        this.baseUrl = baseUrl
        this.clientHeader = clientHeader
    }

    private async sendRequest(request: FetchRequest): Promise<fetchResponse> {
        return await fetch(request.url, request.options)
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return await response.json(); // JSONを直接返す
            });
    }

    async apiCall(endPointUrl: string, queryParam?: queryParam, bodyParam?: bodyParam): Promise<fetchResponse> {
        const url: URL = new URL(endPointUrl, this.baseUrl);
        url.search = queryParam != undefined ? new URLSearchParams(this.castType(queryParam)).toString() : "";

        return await this.sendRequest({
            url: url,
            options: {headers: this.clientHeader}
        });
    }

    private castType(queryParam: { [key: string]: string | number | boolean }): { [key: string]: string } {
        const castParam: { [key: string]: string } = {};
        for (const key in queryParam) {
            if (queryParam.hasOwnProperty(key)) {
                castParam[key] = queryParam[key].toString();
            }
        }
        return castParam;
    }
}

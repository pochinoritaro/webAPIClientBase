export interface fetchResponse {
    [key: string]: any
}

export interface queryParam {
    [index: string]: any
}

export interface bodyParam {
    [index: string]: any
}

export interface clientHeader {
    [index: string]: string
}

export interface FetchRequest {
    url: URL;
    options: RequestInit; // RequestInit型を使用してfetchのオプションを定義
}
enum httpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

interface fetchOption {
    method: httpMethod,
    header?: { [key: string]: string },

}
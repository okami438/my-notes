import http from "@/api/http/http";

const testPing = () => http.httpRequest.head('api/ping');

export default {
    testPing
}
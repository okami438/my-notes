import http from "@/api/http/http";

const testPing = () => http.httpRequest.head('ping');

export default {
    testPing
}
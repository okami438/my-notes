import http from "@/api/http/http";

const ping = () => http.httpRequest.head('ping');

export default {
    ping
}
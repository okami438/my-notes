import http from "@/api/http/http";

const postRegistration = (data) => http.httpRequest.post('api/reg', data);


export default {
    postRegistration,
};

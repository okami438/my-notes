import http from "@/api/http/http";

const postRegistration = (data) => http.httpRequest.post('reg', data);


export default {
    postRegistration,
};

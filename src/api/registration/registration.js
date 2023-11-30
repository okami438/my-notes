import http from "@/api/http/http";

const registrationNewUser = (data) => http.httpRequest.post('reg', data);


export default {
    registrationNewUser,
};

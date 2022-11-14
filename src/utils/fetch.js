import axios from "axios";


// GET request for remote image in node.js


export const Request = (api, type) => {
        const response =  axios(api, {
          method: type,
        //   headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
            return response
            console.log(response);
          });
      };
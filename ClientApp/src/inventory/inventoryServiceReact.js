import axios from "axios";


const getProducts = () => {

    const config = {
        method: "GET",
        url: `https://localhost:7159/api/inventory`,
        //data: payload,
        //withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
};


export { getProducts }
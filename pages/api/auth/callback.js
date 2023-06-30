import { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } from "@/client/client";
import axios from "axios";
import { Yaldevi } from "next/font/google";

const callback = async (req, res) => {
    let code = req.query.code || null;

    const params = new URLSearchParams();
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URI);
    params.append('grant_type', 'authorization_code');

    axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        res.status(200).send(response.data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
};

export default callback
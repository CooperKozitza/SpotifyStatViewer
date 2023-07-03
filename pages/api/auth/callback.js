import axios from "axios";
import querystring from "querystring"

const callback = async (req, res) => {
    let code = req.query.code || null;

    const params = new URLSearchParams();
    params.append('code', code);
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('grant_type', 'authorization_code');

    axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => {
        res.status(200)
            .redirect('/dashboard?' + querystring.stringify(response.data))
    })
    .catch(error => {
        res.status(500).send(error);
    });
};

export default callback
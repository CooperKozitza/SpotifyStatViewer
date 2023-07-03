import querystring from "querystring"
import Cors from 'cors'
import { runMiddleware } from "../utils/runMiddleware"

const cors = Cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'OPTIONS']
})

const login = async (req , res) => {
    await runMiddleware(req, res, cors)
    let state = "-";

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.redirect("https://accounts.spotify.com/authorize?" +
        querystring.stringify({
            response_type: "code",
            client_id: process.env.CLIENT_ID,
            scope: process.env.SCOPE,
            redirect_uri: process.env.REDIRECT_URI,
            state: state
    }))
}

export default login;
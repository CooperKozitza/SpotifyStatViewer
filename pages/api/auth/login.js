import { SCOPE, CLIENT_ID, REDIRECT_URI } from "@/client/client"
import querystring from "querystring"

const login = async (req, res) => {
    let state = "thequickbrownfoxjumpedoverthelazydog";

    res.redirect("https://accounts.spotify.com/authorize?" +
        querystring.stringify({
            response_type: "code",
            client_id: CLIENT_ID,
            scope: SCOPE,
            redirect_uri: REDIRECT_URI,
            state: state
    }))
}

export default login;
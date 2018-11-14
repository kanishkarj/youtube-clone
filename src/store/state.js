var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/';

// var {google} = require('googleapis');
// var OAuth2 = google.auth.OAuth2;

export default {
    auth : null,
    credentials : {
        "installed": {
            "client_id":"1083939974092-2qpppemb9kt4qh91g39fge7r934j9ad9.apps.googleusercontent.com","project_id":"kanishkarj-42",
            "auth_uri":"https://accounts.google.com/o/oauth2/auth",
            "token_uri":"https://www.googleapis.com/oauth2/v3/token",
            "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
            "client_secret":"aP_DAU82NgKEuTPxBEvnCO_1",
            "redirect_uris":
            [
                "urn:ietf:wg:oauth:2.0:oob",
                "http://localhost"
            ]
        }
    },
    SCOPES : ['https://www.googleapis.com/auth/youtube.readonly'],
    TOKEN_DIR : TOKEN_DIR,
    TOKEN_PATH : TOKEN_DIR + 'youtube-nodejs-quickstart.json',
    // OAuth2 : OAuth2

}
export class TokenService {

    //New token request
    public newToken = "grant_type=password&client_id=RSSYS-Server&client_secret=hishusada123@";

    //Refresh token request
    public static refreshToken = "oauth/token?grant_type=refresh_token&client_id=RSSYS-Server&client_secret=hishusada123@&refresh_token=";

    //Access token
    public static accessToken = "?access_token=";
}
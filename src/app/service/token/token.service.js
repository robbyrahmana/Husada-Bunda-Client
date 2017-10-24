"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenService = (function () {
    function TokenService() {
        //New token request
        this.newToken = "grant_type=password&client_id=RSSYS-Server&client_secret=hishusada123@";
    }
    return TokenService;
}());
//Refresh token request
TokenService.refreshToken = "oauth/token?grant_type=refresh_token&client_id=RSSYS-Server&client_secret=hishusada123@&refresh_token=";
//Access token
TokenService.accessToken = "?access_token=";
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map
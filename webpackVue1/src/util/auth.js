
const TokenKey = 'sid';
const ExpiresIn = 'exp';
const UserKey = 'user';
const SSOKey = 'sso';
const LoginOutUrl = 'loginouturl';

export function getToken() {
    return sessionStorage.getItem(TokenKey);
}

export function setToken(token) {
    return sessionStorage.setItem(TokenKey,token);
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey);
}


export function getUser() {
    // return Cookies.get(UserKey)
}

export function setUser(user) {
    //ignore the cookie user
    // return Cookies.set(UserKey, user)
}

export function removeUser() {
    // return Cookies.remove(UserKey)
}

export function getTokenExpiresIn() {
    return sessionStorage.getItem(ExpiresIn)
}

export function setTokenExpiresIn(expiresTime) {
    return sessionStorage.setItem(ExpiresIn, expiresTime)
}
export function removeTokenExpiresIn() {
    return sessionStorage.removeItem(ExpiresIn)
}

export function getSSO() {
    return sessionStorage.getItem(SSOKey);
}

export function setSSO() {
    return sessionStorage.setItem(SSOKey,true);
}

export function removeSSO() {
    return sessionStorage.removeItem(SSOKey);
}

export function getLoginOutUrl() {
    return sessionStorage.getItem(LoginOutUrl);
}

export function setLoginOutUrl(url) {
    return sessionStorage.setItem(LoginOutUrl,url||'');
}

export function removeLoginOutUrl() {
    return sessionStorage.removeItem(LoginOutUrl);
}

export function getDisplayServiceId() {
    return sessionStorage.getItem("displayServiceId");
}

export function setDisplayServiceId(displayServiceId) {
    return sessionStorage.setItem("displayServiceId",displayServiceId);
}

export function getDisplayServiceSerialNumber() {
    return sessionStorage.getItem("displayServiceSerialNumber");
}

export function setDisplayServiceSerialNumber(displayServiceSerialNumber) {
    return sessionStorage.setItem("displayServiceSerialNumber",displayServiceSerialNumber);
}

export function getMenuChildren() {
    return sessionStorage.getItem("menuChildren");
}

export function setMenuChildren(menuChildren) {
    return sessionStorage.setItem("menuChildren",menuChildren);
}


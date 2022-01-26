module.exports = {
    "domain":"/API",
    setAccessToken:function(accessToken){
        this.accessToken=accessToken
        if(!this.accessToken){
            console.log("accessToken is null");
        }
    },
    getAccessToken:function(){
        return this.accessToken;
    }
}
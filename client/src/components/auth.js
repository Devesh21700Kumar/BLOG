class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(){
        this.authenticated = true
        

    }
    isAuthenticated(){
        return this.authenticated;
    }

}

export default new Auth();
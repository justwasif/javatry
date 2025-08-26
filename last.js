class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return `${this._email}chi`
    }

}
const wasif =new user('@',"123")
console.log(wasif.password);
console.log(wasif.email);

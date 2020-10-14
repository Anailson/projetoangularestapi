export class AppConstants {

    public static get baseServidor(): string {return "http://localhost:8080"} //local aonde esta a API

    //cursospringrestapi é  o contexto no arquivo application
    public static get baseLogin(): string {return this.baseServidor + "cursospringrestapi/login"}

    public static get baseUrl(): string {return this.baseServidor + "cursospringrestapi/usuario/"}
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//IMPORT DO CONSTRUTOR
import {AppConstants} from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {}

  
    login(usuario) {
        return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data =>  {
          
          var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
          localStorage.setItem("token", token);
         
          //console.info("Token : " + token);
          console.info("Token" + localStorage.getItem("token"));
        },
        error => {
          console.error("Erro ao fazer o login");
          alert('Acesso Negado!')
        });
      }

  
}

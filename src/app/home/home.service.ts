import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  async getRestream(){
    try {
      let result = await axios.get(`${environment.apiEndpoint}/getRestream`)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }

  async deleteRestram(restramId: any, Endpoint: any){
    var body = {
      "restramId": `${restramId}`,
      "ServerEndpoint": `${Endpoint}`
    }
    console.log(body)
    try {
      await axios.post(`${environment.apiEndpoint}/deleteRestram`,body)
    }
    catch(err) {
      return(err)
    }
  }
}

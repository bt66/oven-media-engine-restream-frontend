import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CreateRestreamServiceService {
  // body: any;
  // headers: any;

  constructor() { }

  // async createRestream(data: any) {
  //   this.headers = {
  //     "authorization" : "Basic b21lLWFjY2Vzcy10b2tlbg=="
  //   }
  //   // this.body = {
  //   //   "id": "stream",
  //   //   "stream": {
  //   //       "name": `${data.name}`
  //   //   },
  //   //   "protocol": "rtmp",
  //   //   "url":`${data.url}`,
  //   //   "streamKey":`${data.streamKey}`
  //   // }

  //   this.body = {
  //     "originServer": `${data.originServer}`,
  //     "ServerEndpoint": `${data.Endpoint}`,
  //     "restreamTitle":`${data.restreamTitle}`,
  //     "streamName": `stream`,
  //     "streamUrl": `${data.url}`,
  //     "streamKey": `${data.streamKey}`
  //   }

  //   console.log(this.body)

  //   await axios.post(`${environment.apiEndpoint}/createRestream`, this.body, {
  //     headers: this.headers
  //   }).then((response) => {
  //     return response.data
  //   }).catch((err) => {
  //     console.log(err)
  //     return err
  //   })
  // }

  async createRestream(data:any){
    const body = {
      "originServer": `asdf`,
      "ServerEndpoint": `${data.Endpoint}`,
      "restreamTitle":`${data.restreamTitle}`,
      "streamName": `stream`,
      "streamUrl": `${data.url}`,
      "streamKey": `${data.streamKey}`
    }
    console.log(body)
    try {

      let result = await axios.post(`${environment.apiEndpoint}/createRestream`, body)
      return (await result.data)
    }
    catch(err) {
      return(err)
    }
  }

}

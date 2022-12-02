import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }

  async getServers(){
    try {
      // let result = await axios.get('https://proxy-cors.carakan.id/http://10.10.0.123:3000/getServers')
      let result = await axios.get(`${environment.apiEndpoint}/getServers`)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }

  async getServer(id:any){
    try {
      // let result = await axios.get('https://proxy-cors.carakan.id/http://10.10.0.123:3000/getServers')
      let result = await axios.get(`${environment.apiEndpoint}/getServer/${id}`)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }

  async addServer(data:any){
    try {
      let result = await axios.post(`${environment.apiEndpoint}/createServer`,data)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }

  async updateServer(data:any){
    const body = {
      "serverId": `${data._id}`,
      "Datacenter": `${data.Datacenter}`,
      "ServerName": `${data.ServerName}`,
      "Endpoint": `${data.Endpoint}`
    }
    console.log(body)
    try {
      let result = await axios.post(`${environment.apiEndpoint}/updateServer`,body)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }

  async deleteServer(id:any){
    const body = {
      "serverId":`${id}`
    }
    try {

      let result = await axios.post(`${environment.apiEndpoint}/deleteServer`,body)
      return result.data
    }
    catch(err) {
      return(err)
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { serverModel } from './serverModel';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})


export class ServerComponent implements OnInit {
  serverData : any;
  data = new serverModel;
  updateData : any;
  moodalInput:boolean = false;
  moodalUpdate:boolean = false;
  UpdateData: any
  serverId: any
  
  // buttonTitle:string = "Hide";
  // hidden:boolean = false;
  constructor(
    private readonly serverService : ServerService
    ) { }

  ngOnInit(): void {
    this.getServers()
  }
  
  async getServers(){
    this.serverData = await this.serverService.getServers();
    console.log(this.serverData)
  }

  async openUpdateModal(serverData:any){
    this.updateData = new serverModel;
    console.log(serverData)
    this.updateData = serverData;
    this.moodalUpdate = true;
  }

  async updateServerData(serverData:any){
    console.log(serverData)
    const result = await this.serverService.updateServer(this.data)
    if(result.status == 200){
      this.getServers().then(() => {
        this.moodalUpdate = false;
        // alert("masok")
      })
    }
  }
  
  async addServer() {
    const result = await this.serverService.addServer(this.data)
    if(result.status == 200){
      this.getServers().then(() => {
        this.moodalInput = false;
        // alert("masok")
      })
    }
  }

  async deleteServer(id: any) {
    const result = await this.serverService.deleteServer(id)
    if(result.status == 200){
      this.getServers().then(() => {
        alert("data deleted")
      })
    }
  }

  async openInputModal(){
    this.moodalInput = true;
    this.data = new serverModel;
  }

  async closeModal() {
    this.moodalInput = false;
  }
}

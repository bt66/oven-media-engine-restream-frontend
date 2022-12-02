import { Component, OnInit } from '@angular/core';
import { CreateRestreamServiceService } from './create-restream-service.service';
import { restreamModel } from './create-restreamModel';
import { Router } from '@angular/router';
import { serverModel } from '../server/serverModel';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-create-restream',
  templateUrl: './create-restream.component.html',
  styleUrls: ['./create-restream.component.css']
})

export class CreateRestreamComponent implements OnInit {
  data = new restreamModel();
  serverData : any

  constructor(
    private readonly createRestreamServiceService: CreateRestreamServiceService,
    private readonly serverService: ServerService,
    private readonly router : Router
    ) { 
  }

  ngOnInit(): void {
    this.getServerData();
  }

  async getServerData() {
    this.serverData = await this.serverService.getServers();
    console.log(await this.serverData);
  }

  async createRestream() {
    console.log(this.data)
    console.log(JSON.stringify(this.data.Endpoint) )
    const result = await this.createRestreamServiceService.createRestream(this.data)
    console.log(await result.status)
    if (result.status == '200'){
      this.router.navigate(['/Home'])
    }
    this.router.navigate(['/Home'])
  }

}

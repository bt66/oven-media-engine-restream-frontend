import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataReStream: any;
  constructor(
    private readonly homeService : HomeService
    ) { }

  ngOnInit(): void {
    this.getRestream()
  }

  async getRestream(){
    this.dataReStream = await this.homeService.getRestream()
    console.log(this.dataReStream)
  }

  async deleteRestram(id: any,Endpoint: any) {
      console.log(id)
      await this.homeService.deleteRestram(id, Endpoint);
      this.ngOnInit()
  }
}

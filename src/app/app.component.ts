import { AutoService } from './auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-autocomplete';
  posts: any;
  username: any;
  constructor(private service: AutoService){

  }

  ngOnInit(){
    this.getAllData();

  }

  getAllData(){
    this.service.getData().subscribe((res: any) => {
      this.posts = res;
      console.log(res)
    })
  }

  nameValue(name:any){
    this.username = name;
  }
}

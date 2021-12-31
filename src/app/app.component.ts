import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.applyTime();
  }
  title = 'IQ NEW YEAR PARTY'

  dt = new Date();
  applyTime(){
    document.getElementById('datetime').innerHTML = this.dt.toLocaleTimeString();
  }


}

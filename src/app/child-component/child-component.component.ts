import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {


  @Input() data: string="";
  lifecycleTicks: number = 0;
  destroy: boolean = true;

  toggleDestroy(){
    this.destroy =!this.destroy;
  }

  ngOnChanges() {
    console.log("Child Component ngOnChanges is called")
    this.lifecycleTicks++;
  }

  ngOnInit(): void {
    
  }

}

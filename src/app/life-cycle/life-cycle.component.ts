import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-life-cycle',
    templateUrl: './life-cycle.component.html',
    styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {


    data:number=100;  
    arbitraryData: string = 'initial';
    constructor() {  
        console.log(`new - data is ${this.data}`);  
        setTimeout(() => {
          this.arbitraryData = 'final';
        }, 5000);
    }  
      
    ngOnChanges() {  
        console.log(`ngOnChanges - data is ${this.data}`);  
    }  
  
    ngOnInit() {  
        console.log(`ngOnInit  - data is ${this.data}`);  
    }  
  
    ngDoCheck() {  
        console.log("ngDoCheck")  
    }  
  
    ngAfterContentInit() {  
        console.log("ngAfterContentInit");  
    }  
  
    ngAfterContentChecked() {  
        console.log("ngAfterContentChecked");  
    }  
  
    ngAfterViewInit() {  
        console.log("ngAfterViewInit");  
    }  
  
    ngAfterViewChecked() {  
        console.log("ngAfterViewChecked");  
    }  
  
    ngOnDestroy() {  
        console.log("ngOnDestroy");  
    }  
  
    fnAddNumber():void{  
        this.data+=100;  
    }  
  
    deleteNumber():void{  
        this.data -=10;  
    }  

}
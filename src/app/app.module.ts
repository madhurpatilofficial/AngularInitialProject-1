import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Child2ComponentComponent } from './child2-component/child2-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ChildComponentComponent,
    Child2ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

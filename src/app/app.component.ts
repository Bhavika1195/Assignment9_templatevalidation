import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatevalidation';

  onSubmit(data: any)
  {
    console.warn(data) 
  }
}

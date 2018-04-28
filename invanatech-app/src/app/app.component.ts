import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Invanatech';
  email_id = "hello@invanatech.com";

  showContact() {
   var btn = document.getElementById('contact-details');
   btn.innerHTML = "Contact us " + this.email_id +" or +91 9052053549";
   window.location.href= "mailto:" + this.email_id ;
  }
}

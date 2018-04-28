import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Invanatech';
  email_id = "hello@invanatech.com";

  showContact() {
    let btn = document.getElementById('contact-details');
    btn.innerHTML = "Contact us " + this.email_id + " or +91 9052053549";
    window.location.href = "mailto:" + this.email_id;
  }

  scroll(el_id) {
    document.getElementById(el_id).scrollIntoView();
    window.location.hash = el_id;
  }

  // generateRandomInteger(min, max) {
  //   return Math.floor(min + Math.random() * (max + 1 - min))
  // }
  //
  // randomPulseGenerator() {
  //   /* this method will start injecting pulse effects everywhere in the banner backgroud */
  //   console.log("randomPulseGenerator triggered");
  //   var node = document.createElement("span");
  //   node.className = ('pulse');
  //   node.style = ("backgroud:red")
  //   node.id = ('generated-pulse');
  //
  //   let banner_el = document.getElementById('homepage-banner');
  //   banner_el.appendChild(node);
  // }
  //
  // ngAfterViewInit() {
  //   console.log('Calendar Loaded');
  //   this.randomPulseGenerator();
  // }
}

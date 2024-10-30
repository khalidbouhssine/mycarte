// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datacarte = {
    ecole: "EIDIA",
    name: "khalid bouhssine",
    number: "14325426",
    rib: "27867542627802535427892764",
    img: "../../assets/images/myimg.jpeg"
  };

  onFormDataReceived(data: any) {
    this.datacarte = {
        ecole: data.establishment,
        name: data.fullName,
        number: data.registrationNumber,
        rib: data.bankDetails,
        img: data.blobUrl 
    };
}

}

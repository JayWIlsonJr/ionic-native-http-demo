import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: HTTP, private plt: Platform) {

    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);

      http.get('https://swapi.co/api/planets/', {}, {})
        .then(data => {

          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

        })
        .catch(error => {

          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
    })


  }

}

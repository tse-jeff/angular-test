import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'google-maps';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAxDjP460mHaVnR39yUJNAbTfmNiA73_8o'
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 40.729040, lng: -73.988532 },
        zoom: 15,
      });
    })
  }
}

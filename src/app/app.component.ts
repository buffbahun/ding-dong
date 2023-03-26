import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ding-dong';
  val?: number;
  typ?: string;

  constructor() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (evt) => {
          this.typ = "deviceorientation";
          this.val = evt.beta ?? -1;
      }, true);
  } else if (window.DeviceMotionEvent) {
      this.typ = "devicemotion";
      window.addEventListener('devicemotion', function (evt) {
        console.log("devicemotion", evt);
      }, true);
  } else {
      this.typ = "MozOrientation";
      window.addEventListener("MozOrientation", function (evt) {
        console.log("MozOrientation", evt);
      }, true);
  }
  }
}

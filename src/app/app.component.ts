import { Component } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    Device.getInfo().then((info) => {
      console.log(info);
      this.info = info;
    });
  }

  info: DeviceInfo | undefined;
}

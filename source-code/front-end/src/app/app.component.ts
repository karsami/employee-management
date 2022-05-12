import { Component, HostBinding } from '@angular/core';
import { AppInfoService, AuthService, ScreenService } from './shared/services';
import viMessage from 'devextreme/localization/messages/vi.json';
import { locale, loadMessages } from "devextreme/localization";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    const language = 'vi';
    loadMessages(viMessage);
    locale(language);
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}

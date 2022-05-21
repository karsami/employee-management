import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AppInfoService, AuthService, ScreenService } from './shared/services';
import viMessage from 'devextreme/localization/messages/vi.json';
import { locale, loadMessages } from "devextreme/localization";
import { TransferDataService } from './shared/services/transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  dxToast = {
    Visible: false,
    Type: '',
    Message: ''
  }

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, public transferDataService: TransferDataService) {
    const language = 'vi';
    loadMessages(viMessage);
    locale(language);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe())
  }

  ngOnInit(): void {
    this.hanldeShowToast();
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  hanldeShowToast() {
    const sub = this.transferDataService.showToast.subscribe(event => {
      this.dxToast.Visible = true;
      this.dxToast.Message = event.Message;
      this.dxToast.Type = event.Type;
    });
    this.subscriptions.push(sub);
  }
}

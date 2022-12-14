import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// const RECAPTCHA_V3_STACKBLITZ_KEY = '6LeHBK0bAAAAAOQVTvBOWhfb08cQfUpFoSE3FsmP';
// const RECAPTCHA_V2_DUMMY_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaModule,
    NgxCaptchaModule
  ],
  providers: [
    // {
    //   provide: RECAPTCHA_V3_SITE_KEY,
    //   useValue: RECAPTCHA_V3_STACKBLITZ_KEY
    // },
    // {
    //   provide: RECAPTCHA_SETTINGS,
    //   useValue: {
    //     siteKey: RECAPTCHA_V2_DUMMY_KEY
    //   } as RecaptchaSettings
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

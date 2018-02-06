import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';
import { NgxPageScrollModule, PageScrollConfig } from 'ngx-page-scroll';
import { ChartModule } from 'angular-highcharts';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent, ContactComponent, ProjectComponent, SkillsComponent } from './content/';
import { SocialComponent, SnapchatQRComponent } from './social';
import { SkillPipe } from './pipes/skill.pipe';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';
import { ScrollService } from './services/scroll.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileBoxComponent,
    SnapchatQRComponent,
    SideNavComponent,
    ContentComponent,
    FooterComponent,
    ContactComponent,
    SocialComponent,
    ProjectComponent,
    SkillPipe,
    SkillsComponent,
    AnimateOnScrollDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    NgxPageScrollModule,
    FlexLayoutModule,
    MaterialModule,
    MomentModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule
  ],
  entryComponents: [
    SnapchatQRComponent,
    ProjectComponent
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    PageScrollConfig.defaultScrollOffset = 25;
    PageScrollConfig.defaultDuration = 500;
  }
}

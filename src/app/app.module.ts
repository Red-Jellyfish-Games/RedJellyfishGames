import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GamesComponent } from './Components/games/games.component';
import { AboutComponent } from './Components/about/about.component';
import { NewsComponent } from './Components/news/news.component';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuComponent } from './Components/menu/menu.component';
import { I18nModule } from './Modules/i18n/i18n.module';
import { SelectLanguageComponent } from './Components/select-language/select-language.component';
import { MobileMenuComponent } from './Components/mobile-menu/mobile-menu.component';
import { CommunicationService } from './Services/communication.service';
import { CarouselComponent } from './Components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ContactComponent,
    GamesComponent,
    AboutComponent,
    NewsComponent,
    MenuComponent,
    SelectLanguageComponent,
    MobileMenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

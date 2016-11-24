import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {AppComponent} from './containers/App';
import {HeaderComponent} from './components/Header/HeaderComponent';
import {FooterComponent} from './components/Footer/FooterComponent';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

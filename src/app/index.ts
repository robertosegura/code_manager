import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {AppComponent} from './containers/App';
import {HeaderComponent} from './components/Header/HeaderComponent';
import {FooterComponent} from './components/Footer/FooterComponent';
import {ProjectListComponent} from './components/ProjectList/ProjectList';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { QuickCardComponent } from './components/quick-card/quick-card.component';
import { SectionCardsComponent } from './components/section-cards/section-cards.component';
import { SectionCardsWhiteComponent } from './components/section-cards-white/section-cards-white.component';
import { QuickCardWhiteComponent } from './components/quick-card-white/quick-card-white.component';
import { PokeADDComponent } from './components/poke-add/poke-add.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    QuickCardComponent,
    SectionCardsComponent,
    SectionCardsWhiteComponent,
    QuickCardWhiteComponent,
    PokeADDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

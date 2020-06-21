import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GamesComponent } from './Components/games/games.component';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'games/colordisco', component: GamesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'news', component: NewsComponent },
  { path: '', component: NewsComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

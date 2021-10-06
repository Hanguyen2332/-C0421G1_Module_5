import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {YoutubeViewSongComponent} from "./practice_2_playlist_song/youtube-view-song/youtube-view-song.component";
import {YoutubePlayerComponent} from "./practice_2_playlist_song/youtube-player/youtube-player.component";
import { VocabularyListComponent } from './exercise_1_dictionary/vocabulary-list/vocabulary-list.component';
import { VocabularyViewComponent } from './exercise_1_dictionary/vocabulary-view/vocabulary-view.component';
import { VocabularyModuleModule } from './vocabulary-module.module';
// import "@angle/compiler"


@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    YoutubeViewSongComponent,
    VocabularyListComponent,
    VocabularyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VocabularyModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

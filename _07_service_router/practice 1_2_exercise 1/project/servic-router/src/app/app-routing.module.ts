import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {YoutubeViewSongComponent} from "./practice_2_playlist_song/youtube-view-song/youtube-view-song.component";
import {YoutubePlayerComponent} from "./practice_2_playlist_song/youtube-player/youtube-player.component";

// const routes: Routes = [
//   {path:'youtube', component: YoutubePlayerComponent},
//   {path:'youtube/:id', component: YoutubeViewSongComponent}
// ];

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlayerComponent,
    children: [  //  children + <router-outlet> Giúp LOAD THÊM view của component con được gọi --> vào view của CHA (không làm mất đi view của component CHA)
      {path: ':id', component: YoutubeViewSongComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import {Song} from "../model/Song";
import {SongService} from "../service/SongService";

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  playlist: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlistSong;
  }

  // songPlaylist: Song[] = [];
  //
  // constructor(private songService: SongService) {  } //DI: songService
  //
  // getAll() {
  //   this.songPlaylist = this.songService.getListSong()
  // }
  //
  // ngOnInit(): void {
  //   this.getAll();
  // }
}

import {Component, OnInit} from '@angular/core';
import {Song} from "../model/Song";
import {SongService} from "../service/SongService";
import {ActivatedRoute, ParamMap, RouterModule} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-view-song',
  templateUrl: './youtube-view-song.component.html',
  styleUrls: ['./youtube-view-song.component.css']
})
export class YoutubeViewSongComponent implements OnInit {

  song: any;

  constructor(private songService: SongService,
              private activatedRoute:ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.song = this.songService.findSongById(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

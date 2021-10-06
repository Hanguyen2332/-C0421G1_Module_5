import {Injectable} from "@angular/core";
import {Song} from "../model/Song";

@Injectable({
  providedIn: 'root'
})

export class SongService {
  playlistSong: Song[] = [
    {
      id: 'CX11yw6YL1w',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    }
  ]

  getListSong () {
    return this.playlistSong
  }

  findSongById(id:String | null) {
    return this.playlistSong.find(item => item.id === id)  // tìm theo ĐK: (khác Filter: trả về all giá trị thỏa mãn)
    //trả về giá trị của PHẦN TỬ ĐẦU TIÊN trong mảng thỏa mãn hàm kiểm tra đã cung cấp.
    // Nếu không có giá trị nào thỏa mãn --> undefined.
  }

  constructor() {
  }

}

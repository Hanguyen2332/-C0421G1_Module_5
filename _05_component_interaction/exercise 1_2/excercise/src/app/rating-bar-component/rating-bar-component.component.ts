import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  // @Input("max")
  // maxChild:number = 10;
  //
  // @Input("ratingValue")
  // ratingValueChild:number = 5;

  // @Input("showRatingValue")
  // showRatingValueChild = true;
  @Input()
  maxChild:number = 10;

  @Input()
  ratingValueChild:number = 5;

  @Input()
  showRatingValueChild = true;

  @Output() rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];//mảng IRatingUnit


  constructor() { }

  calculate(max:number, ratingValue:number) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({  //_ : key -> unknown
        value: index + 1,
        active: index < ratingValue   // highlight những phần tử có index < ratingValue
      }));
  }
/*Array.from(arrayLike, mapFn):   method tạo mảng mới từ :
+ 1 object (with a length property and indexed elements)
+ OR iterable object (objects such as Map and Set).
2 tham số:
- arrayLike: object OR iterable giống mảng  --> chuyển đổi thành mảng
- mapfn: cho phép thực thi một hàm map () trên mỗi phần tử của mảng đang được tạo.

VD: console.log(Array.from([1, 2, 3], x => x + x));  --> // expected output: Array [2, 4, 6]
*/
  ngOnInit() {
    this.calculate(this.maxChild, this.ratingValueChild);  //giá trị khởi tạo: calculate(10,5)    ratingUnits = [10, mapfn] <=>  length = 10; mapfn = i+1 --> bôi vàng 1 -> 5
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {  //???
      let max = changes.max.currentValue; //change.key.currentValue (key: tên biến khai báo ở @Input)
      max = typeof max === 'undefined' ? 5 : max;  //???
      this.maxChild = max;

      this.calculate(max, this.ratingValueChild);

        // console.log(changes.ratingValue.previousValue);
        // console.log(changes.ratingValue.currentValue);
        // console.log(changes.ratingValue.firstChange);

    }
  }

  select(index:number) {
    this.ratingValueChild = index + 1 //vì: index bắt đầu từ 0  VD: index = 8 => ratingValueChild = 9
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValueChild); //duyệt mảng: array.forEach((item,index) => ....)  --> anonymous function
    this.rateChange.emit(this.ratingValueChild);
  }
  enter(index:number) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValueChild);
  }
}

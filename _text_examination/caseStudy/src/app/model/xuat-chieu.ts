export interface XuatChieu {
  // Mã suất chiếu (định dạng CI-XXXX, với X là số nguyên dương), mã không được trùng nhau.
  // - Tên phim (mỗi suất chiếu chỉ xem được 1 phim, một phim sẽ có nhiều suất chiếu khác nhau)
  // - Ngày chiếu (phải sau ngày hiện tại)
  // - Số lượng vé (là số nguyên dương)
  id?:number;
  code?:String;
  ngayChieu?:Date;
  ticketNumber?:number;
  movie?:any;
}

import {AbstractControl} from "@angular/forms";

export function checkAge(dateOfBirth: AbstractControl) {
  //lấy số tuổi:
  let birthDay = new Date(dateOfBirth.value);
  let day_gap = new Date().getDate()-birthDay.getDate() ;
  let month_gap =  new Date().getMonth()-birthDay.getMonth() ;
  let years_gap = new Date().getFullYear() - birthDay.getFullYear();
  //tinh tuoi:
  if (years_gap < 18) {
    return {"ageInvalid" : true};
  } else if (years_gap == 18 && month_gap < 0) {
    return {"ageInvalid" : true};
  } else if (years_gap == 18 && month_gap == 0 && day_gap < 0) {
    return  {"ageInvalid" : true};
  }
  return null;

  // console.log('lay ngay sinh: '+birthDay.getDate())
  // console.log('lay thang sinh: '+birthDay.getMonth())
  // console.log('lay nam sinh: '+birthDay.getFullYear())

  // console.log('lay CURRENT DATE: '+new Date().getDate())
  // console.log('lay CURRENT thang : '+new Date().getMonth())
  // console.log('lay CURRENT nam : '+new Date().getFullYear())
  //
  // console.log('input: '+dateOfBirth.value)
  // console.log('convert: '+ birthDay )
  // console.log('CURRENT: '+ new Date() )
  //
  // console.log('khoang ngay: '+day_gap)
  // console.log('khoang thang: '+month_gap)
  // console.log('khoang nam: '+years_gap)
}

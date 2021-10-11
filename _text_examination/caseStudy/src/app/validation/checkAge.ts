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
}



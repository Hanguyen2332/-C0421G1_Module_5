export interface IEmployee {
  id?:number;
  salary?:number;
  name?:String;
  dayOfBirth?:Date;
  idCard?:String;
  phone?:String;
  email?:String;
  address?:String;

  division?:any;  //Why: data-type = ICustomerType --> list.html compile fail??
  position?:any;  //Why: data-type = ICustomerType --> list.html compile fail??
  eduDegree?:any;  //Why: data-type = ICustomerType --> list.html compile fail??
}

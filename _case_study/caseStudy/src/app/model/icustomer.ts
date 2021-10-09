import {ICustomerType} from "./iCustomerType";

export interface ICustomer {
    id?:number;
    code?:String;
    name?:String;
    dayOfBirth?:Date;
    gender?:number;
    idCard?:String;
    phone?:String;
    email?:String;
    address?:String;

    customerType?:any;  //Why: data-type = ICustomerType --> list.html compile fail??
}

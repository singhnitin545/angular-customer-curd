export class Customer {
  //field
  id: number;
  name: string;
  address: string;
  mobile: number;

  //constructor
  constructor(id: number, name: string, address: string, mobile: number) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.mobile = mobile;
  }
}

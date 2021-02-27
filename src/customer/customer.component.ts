import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  custs: Array<Customer> = new Array();
  newCustomer: any = {};
  constructor() {}

  ngOnInit() {}
  submit() {
    debugger;
    let updateItem = this.custs.find(x => x.id == this.newCustomer.id);
    let index = this.custs.indexOf(updateItem);
    if (index > -1) {
      this.custs[index] = Object.assign({}, this.newCustomer);
    } else {
      let rec = new Customer(
        this.custs.length + 1,
        this.newCustomer.name,
        this.newCustomer.address,
        this.newCustomer.mobile
      );
      this.custs.push(rec);
    }
    this.newCustomer = {};
  }
  edit(id) {
    let updateItem = this.custs.find(x => x.id == id);
    this.newCustomer = Object.assign({}, updateItem);
  }
  delete(id) {
    let index = this.custs.findIndex(d => d.id === id);
    this.custs.splice(index, 1);
  }
}

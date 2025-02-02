import { Component, OnInit } from "@angular/core";

@Component({
  selector: "shared-header-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  public openCart: boolean = false;

  constructor() {}

  ngOnInit() {}

  // For Mobile Device
  toggleCart() {
    this.openCart = !this.openCart;
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {CustomerService} from "../services/customer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent implements OnInit{
  customerId !: number;
  customer !: Customer;
  customerName !: string;
  customerAccounts !: Observable<any>;

  constructor(private route : ActivatedRoute,
              private router : Router,
              private customerService : CustomerService) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
    this.customerName = this.customer.name;
  }
  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.customerAccounts = this.customerService.getCustomerAccounts(this.customerId);
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UISercice } from "../../shared/UIService/ui.service";

@Component({

    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css']

})
export class CustomerComponent implements OnInit{

    customerForm: FormGroup;

    constructor(public fb: FormBuilder, public uiService: UISercice) {

    }

    ngOnInit(): void {
        this.customerForm = this.fb.group({
           
        });

    }

    register():void{
        
    }
}
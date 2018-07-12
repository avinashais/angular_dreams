import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AuthService } from "../services/auth.service";
import { LoginModel } from "../interfaces/LoginModel";
import { UISercice } from "../../shared/UIService/ui.service";
import { BaseComponent } from "../../shared/components/base.component";


@Component({
  
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

    loginForm: FormGroup;
    private validationMessages = {
        userName_minlength: 'Minimum shoul be 3',
        userName_required: 'Please enter user name',
        password_required: 'Please enter password',
        password_minlength: 'enter 6 digits'
    };
    userMessage: string;
    passwordMessage: string;
    disableClose: boolean = false;

 
    constructor(public authSerice: AuthService, public uiService :UISercice,
        public fb: FormBuilder, 
        public loginDialog: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        super();
            loginDialog.disableClose = true;
            
        }

    loginClose(): void {
        this.loginDialog.close();
    }

    ngOnInit(): void {

        this.loginForm = this.fb.group({

            userName: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]]

        });

        const userControl = this.loginForm.get('userName');
        userControl.valueChanges.subscribe(value => this.setMessage(userControl));

        const passwordControl = this.loginForm.get('password');
        passwordControl.valueChanges.subscribe(value => this.setMessage(passwordControl))
    }

    login() {
        this.disableClose = true;
       
        let loginModel: LoginModel = Object.assign({}, this.loginForm.value);
        this.authSerice.authenticate(loginModel).subscribe(result => {
            this.disableClose = false;
        }, err => { this.disableClose = false; });
    }

    setMessage(c: AbstractControl): void {

        let control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'userName') {
                this.userMessage = Object.keys(c.errors).map(key => this.validationMessages['userName_' + key]).join(' ');
            }
            else if (control === 'password') {
                this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages['password_' + key]).join(' ');
            }
        }
    }
    clearValues() {
        this.loginForm.patchValue({
            userName: '',
            password: ''
        });
    }

}
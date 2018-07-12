import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { UISercice } from "../../shared/UIService/ui.service";
import { RegisterModel } from "../interfaces/RegisterModel";
import { RegisterService } from "../services/register.service";
import { JsonpCallbackContext } from "@angular/common/http/src/jsonp";

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    userMessage: string;
    emailMessage: string;
    mobileMessage: string;
    passwordMessage: string;
    rePasswordMessage: string;
    private validationMessages = {
        userName_required: 'enter user name',
        userName_minlength: 'Minimum length should be 3',

        email_required: 'enter email address',
        email_email: 'invalid email address',

        mobile_required: 'enter mobile number',
        mobile_pattern: 'invalid mobile number',

        password_required: 'Please enter password',
        password_minlength: 'enter 6 digits',

        rePassword_required: 'Please enter password',
        rePassword_minlength: 'enter 6 digits',
        rePassword_invalid: 'd'
    };

    constructor(public fb: FormBuilder, public uiService: UISercice,private registerService: RegisterService ) {

    }

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            userName: ['avinash', [Validators.required, Validators.minLength(3)]],
            email: ['avi@avi', [Validators.required, Validators.email]],
            mobile: ['9663027277', [Validators.required, Validators.pattern("[7-9][0-9]{9}")]],
            password: ['A@abf456', [Validators.required, Validators.minLength(6)]],
            rePassword: ['A@abf456', [Validators.required, Validators.minLength(6)]]
        });


        const userControl = this.registerForm.get('userName');
        userControl.valueChanges.subscribe(value => this.setErrorMessage(userControl));

        const emailContrl = this.registerForm.get('email');
        emailContrl.valueChanges.subscribe(value => this.setErrorMessage(emailContrl));

        const mobileContrl = this.registerForm.get('mobile');
        mobileContrl.valueChanges.subscribe(value => this.setErrorMessage(mobileContrl));

        const passwordControl = this.registerForm.get('password');
        passwordControl.valueChanges.subscribe(value => this.setErrorMessage(passwordControl))

        const rePasswordControl = this.registerForm.get('rePassword');
        rePasswordControl.valueChanges.subscribe(value => this.setErrorMessage(rePasswordControl))
    }


    register(): void {
        let registerModel: RegisterModel = Object.assign({}, this.registerForm.value);
        this.registerService.register(registerModel).subscribe(s=>{alert(s)});

         
    }
  
   

    setErrorMessage(c: AbstractControl): void {
        let control = this.uiService.getControlName(c);
        if ((c.touched || c.dirty) && c.errors) {
            if (control === 'userName') {
                this.userMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
            }
            else if (control === 'email') {
                this.emailMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
            }
            else if (control === 'mobile') {
                this.mobileMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
            }
            else if (control === 'password') {
                this.passwordMessage = Object.keys(c.errors).map(key => this.validationMessages[control + '_' + key]).join(' ');
            }
        }
    }
}



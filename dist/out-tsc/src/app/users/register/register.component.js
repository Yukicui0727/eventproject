import { __decorate } from "tslib";
import { Component } from '@angular/core';
// import {User} from '../../shared/models/user';
let RegisterComponent = class RegisterComponent {
    constructor(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.err = false;
    }
    ngOnInit() {
        this.registerFormGroup = this.fb.group({
            username: '',
            passwordGroup: this.fb.group({
                password: '',
                confirm_password: ''
            }, { validator: this.passwordValidator })
        });
    }
    onSubmit() {
        if (this.registerFormGroup.valid) {
            const { username, passwordGroup, passwordGroup: { password } } = this.registerFormGroup.value;
            this.authService.register({ name: username, password })
                .subscribe(res => {
                if (res.success) {
                    this.router.navigate(['/users/login']);
                }
                else {
                    // show error text.
                }
            }, (err) => {
                this.err = true;
            });
        }
        else {
            return false;
        }
    }
    passwordValidator({ value }) {
        const { password, confirm_password } = value;
        return password === confirm_password ? null : { passwordGroup: 'Passwords don\'t match!' };
    }
    onOrganizer() { }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map
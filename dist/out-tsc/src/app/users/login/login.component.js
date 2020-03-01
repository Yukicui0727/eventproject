import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(as, router) {
        this.as = as;
        this.router = router;
        this.err = false;
    }
    ngOnInit() { }
    onSubmit(user) {
        console.log(user);
        this.as.login(user)
            .subscribe(res => {
            if (res.success) {
                this.router.navigate(['/products']);
            }
            else {
                this.err = true;
            }
        });
    }
    onRegister() {
        this.router.navigate(['/users/register']);
    }
    updateErr() {
        if (this.err) {
            this.err = false;
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
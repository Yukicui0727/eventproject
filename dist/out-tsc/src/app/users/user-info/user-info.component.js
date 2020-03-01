import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { UserDetail } from '../../shared/models/user-detail';
let UserInfoComponent = class UserInfoComponent {
    constructor(authService, userDetailService) {
        this.authService = authService;
        this.userDetailService = userDetailService;
        this.userDetail = new UserDetail();
    }
    ngOnInit() {
        this.authService.userSubject
            .subscribe((user) => {
            if (user && user.userDetail) {
                this.userDetail = user.userDetail;
            }
        });
    }
    onSubmit() {
        if (this.userDetail.id) {
            this.userDetailService.updateUserDetail(this.userDetail)
                .subscribe(res => {
                // update success
                this.authService.checkLogin(this.userDetail); // update user detail in userSubject(workaround. TODO: create user detail subject).
            });
        }
        else {
            this.userDetailService.addUserDetail(this.userDetail)
                .subscribe((res) => {
                if (res.success) {
                    this.userDetail = res.userDetail; // add success, update user detail with id.
                    this.authService.checkLogin(this.userDetail);
                }
            });
        }
    }
};
UserInfoComponent = __decorate([
    Component({
        selector: 'app-user-info',
        templateUrl: './user-info.component.html',
        styleUrls: ['./user-info.component.scss']
    })
], UserInfoComponent);
export { UserInfoComponent };
//# sourceMappingURL=user-info.component.js.map
import { async, TestBed } from '@angular/core/testing';
import { UpdateOrganizerAddressComponent } from './update-organizer-address.component';
describe('UpdateOrganizerAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateOrganizerAddressComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateOrganizerAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-organizer-address.component.spec.js.map
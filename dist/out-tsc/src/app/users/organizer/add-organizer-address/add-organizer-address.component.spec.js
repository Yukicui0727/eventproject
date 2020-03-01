import { async, TestBed } from '@angular/core/testing';
import { AddOrganizerAddressComponent } from './add-organizer-address.component';
describe('AddOrganizerAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddOrganizerAddressComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AddOrganizerAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-organizer-address.component.spec.js.map
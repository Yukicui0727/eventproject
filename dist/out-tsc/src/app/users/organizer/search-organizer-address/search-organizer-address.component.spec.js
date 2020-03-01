import { async, TestBed } from '@angular/core/testing';
import { SearchOrganizerAddressComponent } from './search-organizer-address.component';
describe('SearchOrganizerAddressComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchOrganizerAddressComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchOrganizerAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=search-organizer-address.component.spec.js.map
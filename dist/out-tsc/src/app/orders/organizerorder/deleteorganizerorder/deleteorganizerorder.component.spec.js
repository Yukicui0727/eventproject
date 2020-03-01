import { async, TestBed } from '@angular/core/testing';
import { DeleteorganizerorderComponent } from './deleteorganizerorder.component';
describe('DeleteorganizerorderComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeleteorganizerorderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteorganizerorderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deleteorganizerorder.component.spec.js.map
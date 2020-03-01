import { async, TestBed } from '@angular/core/testing';
import { GetorganizerorderComponent } from './getorganizerorder.component';
describe('GetorganizerorderComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GetorganizerorderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GetorganizerorderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=getorganizerorder.component.spec.js.map
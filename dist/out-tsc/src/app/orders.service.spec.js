import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
describe('OrdersService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrdersService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=orders.service.spec.js.map
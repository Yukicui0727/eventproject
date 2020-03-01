import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';
describe('EventsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EventsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=events.service.spec.js.map
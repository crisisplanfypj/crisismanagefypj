import { TestBed } from '@angular/core/testing';
import { DataserviceService } from './dataservice.service';
describe('DataserviceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataserviceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=dataservice.service.spec.js.map
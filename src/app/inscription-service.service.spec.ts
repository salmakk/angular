import { TestBed } from '@angular/core/testing';
import { RegistrationServiceService } from './inscription-service.service';




describe('RegistrationServiceService', () => {
  let service: RegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
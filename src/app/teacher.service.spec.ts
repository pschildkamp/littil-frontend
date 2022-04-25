import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeacherService } from './teacher.service';
import {createHttpFactory, HttpMethod, SpectatorHttp} from "@ngneat/spectator";
import {Teacher} from "./model/teacher";

describe('TeacherService', () => {
  let service: TeacherService;
  let spectator: SpectatorHttp<TeacherService>;
  const createHttp = createHttpFactory(TeacherService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TeacherService);
    spectator = createHttp()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test get by id', () => {
    spectator.service.get('test').subscribe();
    spectator.expectOne('api/v1/teacher/test', HttpMethod.GET);
  });

  it('test create new teacher', () => {
    let teacher = new Teacher(undefined,"Gast","Docent","gast@docent.nl","1000AA");
    spectator.service.create(teacher).subscribe();
    spectator.expectOne('api/v1/teacher', HttpMethod.POST);
  });

  it('test update existing teacher', () => {
    let teacher = new Teacher("abcd-1234","Gast","Docent","gast@docent.nl","1000AA");
    spectator.service.update(teacher).subscribe();
    spectator.expectOne('api/v1/teacher/abcd-1234', HttpMethod.PUT);
  });
});

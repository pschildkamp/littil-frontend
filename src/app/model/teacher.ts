export class Teacher {
  static CREATED_EVENT = 'teacher-created';
  static UPDATED_EVENT = 'teacher-updated';
  static DELETED_EVENT = 'teacher-deleted';

  id: string;
  firstName: string;
  surName: string;
  email: string;
  postalCode: string;
  country: string = 'nl';

  constructor(
    id: string,
    firstName: string,
    surName: string,
    email: string,
    postalCode: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.surName = surName;
    this.email = email;
    this.postalCode = postalCode;
  }
}

export class TeacherUpdate {
  id: string;
  firstName: string | undefined;
  surName: string | undefined;
  email: string | undefined;
  postalCode: string | undefined;
  country: string = 'nl';

  constructor(id: string) {
    this.id = id;
  }
}

export class TeacherCreate {
  firstName: string | undefined;
  surName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  postalCode: string | undefined;
  country: string = 'nl';
}

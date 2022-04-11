export class Teacher {
  id: string | undefined;
  firstName: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  postalCode: string | undefined;
  country: string = "nl"

  constructor(id: string, firstName: string, surname: string, email: string, postalCode: string) {
    this.id = id;
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
    this.postalCode = postalCode;
  }
}

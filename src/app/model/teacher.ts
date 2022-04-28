export class Teacher {
  id: string | undefined;
  firstName: string | undefined;
  surname: string | undefined;
  email: string | undefined;
  postalCode: string | undefined;
  country: string = "nl"
  // TODO: let's not go here yet
  //preferences: "this is a free text field",
  //availability: [0,2,4]

  constructor(
    id: string | undefined,
    firstName: string | undefined,
    surname: string | undefined,
    email: string | undefined,
    postalCode: string | undefined) {
    this.id = id;
    this.firstName = firstName;
    this.surname = surname;
    this.email = email;
    this.postalCode = postalCode;
  }
}

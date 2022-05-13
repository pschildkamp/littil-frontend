export class School {
  id: string | undefined;
  name: string | undefined;
  address: string | undefined;
  postalCode: string | undefined;
  contactPersonName: string | undefined;
  contactPersonEmail: string | undefined;

  constructor(
    id: string | undefined,
    name: string | undefined,
    address: string | undefined,
    postalCode: string | undefined,
    contactPersonName: string | undefined,
    contactPersonEmail: string | undefined) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.postalCode = postalCode;
    this.contactPersonName = contactPersonName;
    this.contactPersonEmail = contactPersonEmail;
  }
}

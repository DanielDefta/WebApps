import { Locatie } from './locatie';

export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    veiligheidsVraag1: string;
    aantwoordVraag1: string;
    veiligheidsVraag2: string;
    aantwoordVraag2: string;
    locatie: Locatie;
    roles: string[];
    online: boolean;

    constructor(
        username: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        veiligheidsVraag1: string,
        aantwoordVraag1: string,
        veiligheidsVraag2: string,
        aantwoordVraag2: string,
        locatie: Locatie) {

        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.veiligheidsVraag1 = veiligheidsVraag1;
        this.aantwoordVraag1 = aantwoordVraag1;
        this.veiligheidsVraag2 = veiligheidsVraag2;
        this.aantwoordVraag2 = aantwoordVraag2;
        this.locatie = locatie;
    }
}
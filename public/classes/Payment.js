export class Payment {
    //readonly client: string
    //private details: string
    //amount: number
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //inv.client = "something else"
        return `${this.recipient} iss owed €${this.amount} for ${this.details}`;
    }
}

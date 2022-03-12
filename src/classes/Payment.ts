import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter {
  //readonly client: string
  //private details: string
  //amount: number

  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    //inv.client = "something else"
    return `${this.recipient} is owed €${this.amount} for ${this.details}`
  }
}

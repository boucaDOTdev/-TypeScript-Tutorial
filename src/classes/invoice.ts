import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter {
  //readonly client: string
  //private details: string
  //amount: number

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    //inv.client = "something else"
    return `${this.client} owes €${this.amount} for ${this.details}`
  }
}

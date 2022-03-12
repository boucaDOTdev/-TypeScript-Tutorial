import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemolate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign({ uid }, obj);
};
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "alex" },
};
const docFour = {
    uid: 2,
    resourceName: "shopping List",
    data: ["bread", "milk", "toilet paper"],
};
console.log(docThree, docFour);

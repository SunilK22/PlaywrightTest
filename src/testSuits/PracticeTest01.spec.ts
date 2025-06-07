import { Page, test } from '@playwright/test'
import { basePage } from '../pages/basePage'
import { demoInterface } from '../pages/interface1'



interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


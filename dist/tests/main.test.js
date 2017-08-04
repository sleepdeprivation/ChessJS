"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
require("mocha");
//import {main} from '../main';
describe('Boilerplate Test', () => {
    it('should show that tests are working', () => {
        console.log("RUNNING!");
        chai_1.expect("Hello World!").to.equal('Hello World!');
    });
});
//# sourceMappingURL=main.test.js.map
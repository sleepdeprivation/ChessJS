import { expect, assert } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

//import {main} from '../main';


describe('Boilerplate Test', () => {
  it('should show that tests are working', () => {
      console.log("RUNNING!");
      expect("Hello World!").to.equal('Hello World!');
  });
});

import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {

        it('TC-088 Placeholder is correct', function () {

        });

        it('TC-089 By clicking on chevron opens list', function () {

        });


        it('TC-091 After the value is chosen the dropdown is collapsed', function () {

        });
    });


    describe('Negative cases', function () {

    it('TC-092 First type of the story is "Overcoming the Monster"', function () {

     });

        xit('TC-0101 User can change the type of the story "Comedy" -> "Tragedy', function () {

        });

        it('TC-XXX Age = 0', function () {
            expect(submitBtn).toEqual(true);
        });

        it('TC-XXX Age = 1000000000000', function () {
            expect(submitBtn).toEqual(true);
        });

    });

});



import exp from "../../data/expected.json"
import sel from "../../data/selectors";


describe('My Little Age ', function () {

    describe('Age field placeholder = Hero age', function () {

        before('Open App', function () {
            browser.url('');
        });

        afterEach('Refresh', () => {
            browser.url('')
        });

        xit('TC-066 Not chosen button', function () {
            const name =  $(sel.name);
            $(sel.name).setValue('Sherlock Holmes 99');
            $(sel.age).setValue('1234567890');
            $(sel.story).click();
            $(sel.comedy).click();
            const isDisabledAttributeExists = $(sel.submit).getAttribute('disabled')
            expect(isDisabledAttributeExists).toEqual('true');

        });

        xit('TC-067 Age field accepts one digit"', function () {
            $(sel.name).setValue('1');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });
        xit('TC-068 Age field placeholder = "Hero\'s age"', function () {
            $(sel.name).setValue('99999999999');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        xit('TC-069 Age field accepts 12 digits"', function () {
            $(sel.name).setValue('1234567890');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        xit('TC-070 Age field accepts random digits', function () {
            $(sel.name).setValue('1234567890');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        xit('TC-071 Age field accepts 0 before the number"', function () {
            $(sel.name).setValue('0123');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        xit('TC-072 Age field accepts space before the number"', function () {
            $(sel.name).setValue(' 123');
            const errorMessage = $(sel.errorRequired).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        xit('TC-073 By clicking up on the spin, the value should increase by 1, when Age field empty', function () {
            $(sel.age).click();
            const valueIncrise = $(sel.age);
            expect(valueIncrise).getText();
        });

        xit('TC-074 By clicking up on the spin, the value should increase by 1, when Age field not empty', function () {

        });

        xit('TC-075 By clicking down on the spin, the value should decrease by 1, when Age field value > 1', function () {

        });

        xit('TC-076 Copy-paste functionality', function () {

        });









    });
});

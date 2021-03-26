import exp from "../../data/expected.json";
import sel from "../../data/selectors";

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function () {
            browser.url('');
        });

        xit('TC-028 Name field placeholder= "Hero\'s name"', function () {
            const namePlaceholder = $(sel.name).getAttribute('placeholder');
            expect(namePlaceholder).toEqual(exp.namePlaceholder);
        });

        xit('TC-029 The cursor blinks in field', function () {
            $(sel.name).click();
            expect($(sel.name).isFocused()).toEqual(true);
        });

        xit('??????TC-030 Verify that the Name field frame turns from grey to blue when hover the field', function () {
            $(sel.name).moveTo();
            const hover = $(sel.name);
            const hoverBorderColor = hover.getCSSProperty('border-top-color');
            expect(hoverBorderColor.value).toContain('rgba(183,206,225,1)');
        });

        // it('????????TC-031 Verify that the Name field frame turns from grey to blue when hover the field', function () {
        //     $(sel.name).click();
        //     const click = $(sel.name)
        //     const clickBorderColor = click.getCSSProperty('border-color');
        //     expect(clickBorderColor).toContain('#40a9ff');
        // });

        xit('TC-032 Name field accepts one symbol', function () {
            $(sel.name).setValue('a');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-033 Name field accepts 70 symbols', function () {
            $(sel.name).setValue('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-034 Name field accepts letters', function () {
            $(sel.name).setValue('abcz');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-035 Name field accepts Lowercase letters', function () {
            $(sel.name).setValue('abcdefghijklmnopqrstuvwxyz');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-036 Name field accepts Uppercase letters', function () {
            $(sel.name).setValue('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-037 Name field accepts digits', function () {
            $(sel.name).setValue('1234567890');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-038 Name field accepts special symbols', function () {
            $(sel.name).setValue('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-039 Name field accepts special symbols', function () {
            $(sel.name).setValue('♣ ☺ ♂');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-040 Name field accepts line feed symbols', function () {
            $(sel.name).setValue('^M" /  "\\n" /  "\\r');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-041 Name field accepts russian letters', function () {
            $(sel.name).setValue('АбВгД');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-042 Copy-paste functionality', function () {
            $(sel.name).setValue('test', ["Control", "v"]);
            browser.pause(1000);
            const err = $(sel.nameFieldError).isDisplayed();
            expect(err).toEqual(false);
        });

        xit('TC-043 Verify that the Name input field does not accepts SQL code injections', function () {
            $(sel.name).setValue('FOO`)DROP TABLE USERS');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-044 Verify that the Name input field does not accepts XML code injections', function () {
            $(sel.name).setValue(' <code> ');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        xit('TC-045 Verify that the Name input field does not accepts XSS code injections', function () {
            $(sel.name).setValue(' <script>alert("I hacked this!")</script>');
            const error = $(sel.errorRequired).isDisplayed();
            expect(error).toEqual(false);
        });

        // it('TC-046 Verify that the Name input field does not allow to leave Name field empty', function () {
        //     const elem = $(sel.name);
        //     elem.setValue('test');
        //     elem.clearValue();
        //     const error = $(sel.errorRequired).getText();
        //     expect(error).toEqual('Required');
        // });

        xit('TC-049 Name field doesn\'t accept 71 symbol', function () {
            $(sel.name).setValue(' wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
            browser.pause(1000)
            const error = $(sel.longLength70).getText();
            expect(error).toEqual('70 symbols max');
        });

        // it('TC-050 Name field is empty', function () {
        //     $(sel).setValue(' <script>alert("I hacked this!")</script>');
        //     const error = $(sel.errorRequired).isDisplayed();
        //      expect(error).toEqual(false);
        // });

        it('TC-051 Name field is empty', function () {
            const arrRadioHe =  $$(sel.radioButtonsLabel)[0];
            arrRadioHe.click();
            $(sel.age).setValue('1234567890');
            $(sel.story).click();
            $(sel.comedy).click();
            const isDisabledAttributeExists = $(sel.submit).getAttribute('disabled')
            expect(isDisabledAttributeExists).toEqual('true');

        });

        // it('TC-051 Name field accepts space only', function () {
        //     $(sel.name).setValue('     ');
        //     const error = $(sel.errorRequired).isDisplayed();
        //     expect(error).toEqual(false);
        // });

       // it('TC-052 Verify that the Name input field does not accepts links', function () {
       //      $(sel.name).setValue('https://en.wikipedia.org');
       //      const error = $(sel.errorRequired).isDisplayed();
       //      expect(error).toEqual(false);
       //  });
       //
       // wait till fixed
       //  it('TC-053 Verify that the Name field does not accepts data type format', function () {
       //      $(sel.name).setValue('01/01/2021');
       //      const error = $(sel.errorRequired).isDisplayed();
       //      expect(error).toEqual(false);
       //  });

    });
});

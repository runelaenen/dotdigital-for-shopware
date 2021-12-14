import Plugin from 'src/plugin-system/plugin.class';

export default class IdentifyPlugin extends Plugin {

    init() {
        if (typeof window.dmPt === 'undefined') {
            return;
        }

        const emailInputs = document.querySelectorAll('input#personalMail, input#form-email');

        if (emailInputs.length === 0) {
            return;
        }

        emailInputs.forEach(el => {
            el.addEventListener('blur', () => {
                window.dmPt('identify', el.value);
            });
        });
    }
}

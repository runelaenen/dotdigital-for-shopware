import Plugin from 'src/plugin-system/plugin.class';

export default class IdentifyPlugin extends Plugin {

    init() {
        const emailInputs = document.querySelectorAll('input#personalMail, input#form-email');

        if (emailInputs.length === 0) {
            return;
        }

        emailInputs.forEach(el => {
            el.addEventListener('blur', () => {
                if (typeof window.dmPt !== 'undefined') {
                    window.dmPt('identify', el.value);
                }
            });
        });
    }
}

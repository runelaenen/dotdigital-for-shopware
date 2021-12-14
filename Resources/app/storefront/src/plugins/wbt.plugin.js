import Plugin from 'src/plugin-system/plugin.class';
import CookieStorage from 'src/helper/storage/cookie-storage.helper';
import { DotdigitalCookies } from '../cookies';

export default class WbtPlugin extends Plugin {
    static options = {
        /**
         * Web behavior tracking profile ID
         * @type string
         */
        profileId: '',
        /**
         * Product data (only product pages)
         * @type {Object}
         */
        productData: {},
        /**
         * Dotdigital cookie name
         * @type string
         */
        ddEnabledCookie: DotdigitalCookies.GOVERNOR,
    };

    init() {
        const { profileId, productData, ddEnabledCookie } = this.options;
        const ddTrackingEnabled = CookieStorage.getItem(ddEnabledCookie);

        if (ddTrackingEnabled) {
            (function (w, d, u, t, o, c) {
                w['dmtrackingobjectname'] = o;
                c = d.createElement(t);
                c.async = 1;
                c.src = u;
                t = d.getElementsByTagName(t)[0];
                t.parentNode.insertBefore(c, t);
                w[o] = w[o] || function () {
                    (w[o].q = w[o].q || []).push(arguments);
                };
            })(window, document, '//static.trackedweb.net/js/_dmptv4.js', 'script', 'dmPt');

            window.dmPt('create', profileId);
            window.dmPt('track', productData);
        }
    }
}

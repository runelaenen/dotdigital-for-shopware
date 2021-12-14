import { COOKIE_CONFIGURATION_UPDATE } from 'src/plugin/cookie/cookie-configuration.plugin';
import CookieStorage from 'src/helper/storage/cookie-storage.helper';
import { DotdigitalCookies } from '../cookies';

document.$emitter.subscribe(COOKIE_CONFIGURATION_UPDATE, eventCallback);

function eventCallback(updatedCookies) {
    const detail = updatedCookies.detail;
    // eslint-disable-next-line no-unused-vars
    for (const cookie in detail) {
        if (Object.prototype.hasOwnProperty.call(detail, cookie)) {
            // if any cookie has been made inactive
            if (!detail[cookie]) {
                if (Object.values(DotdigitalCookies).indexOf(cookie) > -1) {
                    removeAllDotdigitalCookies();
                }
            }
        }
    }
}

function removeAllDotdigitalCookies() {
    Object.keys(DotdigitalCookies).map(key => {
        CookieStorage.removeItem(DotdigitalCookies[key]);
    })
}



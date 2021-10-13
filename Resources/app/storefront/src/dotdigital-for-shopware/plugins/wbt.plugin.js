import Plugin from 'src/plugin-system/plugin.class';

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
    };

    init() {
        (function(w,d,u,t,o,c){w['dmtrackingobjectname'] = o;c = d.createElement( t );c.async = 1;c.src = u;t = d.getElementsByTagName( t )[0];t.parentNode.insertBefore( c,t );w[o] = w[o] || function(){(w[o].q = w[o].q || []).push( arguments );};
        })( window, document, '//static.trackedweb.net/js/_dmptv4.js', 'script', 'dmPt' );

        window.dmPt('create', this.options.profileId);
        window.dmPt('track', this.options.productData);
    }
}

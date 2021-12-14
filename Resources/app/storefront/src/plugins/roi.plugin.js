import Plugin from 'src/plugin-system/plugin.class';

export default class RoiPlugin extends Plugin {
    static options = {
        /**
         * Completed order line items
         * @type array
         */
        lineItems: [],
        /**
         * Order total
         * @type float
         */
        total: 0,
    };

    init() {
        if (typeof window._dmTrack === 'undefined') {
            return;
        }

        if (this.options) {
            const lineItemCount = this.options.lineItems.length;
            let i = 0;

            for (i; i < lineItemCount; i++) {
                window._dmTrack('product', this.options.lineItems[i]);
            }
            window._dmTrack('CheckOutAmount', this.options.total);
        }
    }
}

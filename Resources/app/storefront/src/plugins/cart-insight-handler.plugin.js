import Plugin from 'src/plugin-system/plugin.class';
import HttpClient from 'src/service/http-client.service';
import CartInsight from '../cart-insight';

export default class CartInsightHandlerPlugin extends Plugin {
    static options = {}

    init() {
        if (typeof window.dmPt === 'undefined') {
            return;
        }

        this._cartInsight = new CartInsight();
        this._client = new HttpClient();

        if (this.options.data) {
            const cartPhase = this.options.data.cart_phase;
            if (cartPhase === 'ORDER_COMPLETE') {
                this._cartInsight.init(this.options.data);
            } else {
                this.getCart();
            }
        }
    }

    getCart() {
        this._client.get('/checkout/cart.json', this.handleData.bind(this));
    }

    handleData(response) {
        const cart = JSON.parse(response);
        const payload = this.options.data;

        payload.cart_id = cart.token;
        payload.subtotal = cart.price.netPrice;
        payload.shipping = this.calculateShipping(cart.deliveries);
        payload.discount_amount = this.calculateDiscount(cart.lineItems);
        payload.tax_amount = this.calculateTax(cart.price.calculatedTaxes);
        payload.grand_total = cart.price.totalPrice;
        payload.line_items = this.prepareLineItems(cart.lineItems);

        this._cartInsight.init(payload);
    }

    calculateShipping(items) {
        let shippingTotal = 0;

        items.forEach(el => {
            shippingTotal += el.shippingCosts.totalPrice;
        });

        return shippingTotal;
    }

    calculateDiscount(items) {
        let discountTotal = 0;

        items.forEach(el => {
            if (el.type === 'promotion') {
                discountTotal += el.price.totalPrice;
            }
        });

        // return a positive value for discount
        return Math.abs(discountTotal);
    }

    calculateTax(items) {
        let taxTotal = 0;

        items.forEach(el => {
            taxTotal += el.tax;
        });

        return taxTotal;
    }

    prepareLineItems(items) {
        const processedLineItems = [];

        items.filter(el => el.type !== 'promotion').forEach(el => {
            const unitPrice = el.price.listPrice && el.price.listPrice.price > el.price.unitPrice ?
                el.price.listPrice.price :
                el.price.unitPrice;

            const productData = {
                sku: el.payload.productNumber || '',
                name: el.label,
                description: el.description || '',
                quantity: el.quantity,
                unit_price: unitPrice,
                sale_price: el.price.unitPrice,
                total_price: el.price.totalPrice,
                image_url: el.cover ? el.cover.url : '',
                product_url: this.getProductUrl(el),
            }

            processedLineItems.push(productData);
        });

        return processedLineItems;
    }

    getProductUrl(product) {
        return location.protocol + '//' + location.host + '/detail/' + product.id;
    }
}

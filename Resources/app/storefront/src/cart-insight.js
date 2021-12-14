export default class CartInsight {

    init(data) {
        if (data.customer_email) {
            window.dmPt('identify', data.customer_email);
        }

        this.send(data);
    }

    send(data) {
        if (!data.cart_id) {
            return;
        }

        window.dmPt(
            'cartInsight',
            {
                'programID': data.program_id,
                'cartDelay': data.cart_delay,
                'cartID': data.cart_id,
                'cartPhase': data.cart_phase,
                'currency': data.currency,
                'subtotal': data.subtotal,
                'shipping': data.shipping,
                'discountAmount': data.discount_amount,
                'taxAmount': data.tax_amount,
                'grandTotal': data.grand_total,
                'cartUrl': data.cart_url,
                'lineItems': this.mapLineItems( data.line_items ),
            }
        );
    }

    mapBaseItem(item) {
        return {
            sku: item.sku,
            name: item.name,
            description: item.description,
            category: item.category,
            unitPrice: item.unit_price,
            salePrice: item.sale_price,
            quantity: item.quantity,
            totalPrice: item.total_price,
            imageUrl: item.image_url,
            productUrl: item.product_url,
        };
    }

    mapLineItems(lineItems) {
        var mapped = [];
        if (lineItems && lineItems.length) {
            mapped = lineItems.map( this.mapBaseItem );
        }
        return mapped;
    }
}

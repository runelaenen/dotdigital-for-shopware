# Dotdigital for Shopware 6

Dotdigital for Shopware is now available for Shopware merchants.

## Requirements
- Shopware 6.5+
    - Shopware 6.4.x is compatible up with the app's 1.x release line.

## Installation

### Production
In production environments, merchants should install via our listing on the Shopware Store.

### Development
The app can also be installed via git:
```
cd Sites/shopware/development/custom
mkdir apps && cd apps
git clone https://github.com/dotmailer/dotdigital-for-shopware.git DotdigitalForShopware
```

## Changelog

### 2.0.1

##### Improvements
- Cart insight data is now not sent until a cart contains items.
- Cart delay is set to 0 if the cart phase is 'ORDER_COMPLETE'

### 2.0.0

#### What's new
- The plugin is now compatible with Shopware 6.5+

[NOTE: Shopware 6.4.x will not be able to run this version of the plugin.]

### 1.0.1

##### Improvements
- Cart insight data is now not sent until a cart contains items.
- Cart delay is set to 0 if the cart phase is 'ORDER_COMPLETE'

### 1.0.0

##### What's new
- Web behaviour tracking (with product data for abandoned browse).
- Site and ROI tracking.
- Abandoned cart program enrolment.

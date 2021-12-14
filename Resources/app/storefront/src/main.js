import WbtPlugin from './plugins/wbt.plugin';
import RoiPlugin from './plugins/roi.plugin';
import IdentifyPlugin from './plugins/identify.plugin';
import CartInsightHandlerPlugin from './plugins/cart-insight-handler.plugin';

import './subscriber/cookie-consent.subscriber';

const PluginManager = window.PluginManager;

PluginManager.register('WbtPlugin', WbtPlugin, '[data-wbt-plugin]');
PluginManager.register('RoiPlugin', RoiPlugin, '[data-roi-plugin]');
PluginManager.register('IdentifyPlugin', IdentifyPlugin, '[data-identify-plugin]');
PluginManager.register('CartInsightHandlerPlugin', CartInsightHandlerPlugin, '[data-cart-insight-handler-plugin]');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}

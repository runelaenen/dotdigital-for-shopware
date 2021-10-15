import WbtPlugin from './dotdigital-for-shopware/plugins/wbt.plugin';
import RoiPlugin from './dotdigital-for-shopware/plugins/roi.plugin';
import IdentifyPlugin from './dotdigital-for-shopware/plugins/identify.plugin';
import CartInsightHandlerPlugin from './dotdigital-for-shopware/plugins/cart-insight-handler.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('WbtPlugin', WbtPlugin, '[data-wbt-plugin]');
PluginManager.register('RoiPlugin', RoiPlugin, '[data-roi-plugin]');
PluginManager.register('IdentifyPlugin', IdentifyPlugin, '[data-identify-plugin]');
PluginManager.register('CartInsightHandlerPlugin', CartInsightHandlerPlugin, '[data-cart-insight-handler-plugin]');

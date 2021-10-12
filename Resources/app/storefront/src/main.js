import WbtPlugin from './dotdigital-for-shopware/plugins/wbt.plugin';
import RoiPlugin from './dotdigital-for-shopware/plugins/roi.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('WbtPlugin', WbtPlugin, '[data-wbt-plugin]');
PluginManager.register('RoiPlugin', RoiPlugin, '[data-roi-plugin]');

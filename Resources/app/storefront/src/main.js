import WbtPlugin from './dotdigital-for-shopware/plugins/wbt.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('WbtPlugin', WbtPlugin, '[data-wbt-plugin]');

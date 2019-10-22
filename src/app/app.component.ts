import { Component, OnInit } from '@angular/core';
import { openDB } from 'idb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'indexed-db';
  db;
  testData = [
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'strategy', attributes: [7, 8, 10], widgetInstances: {},

    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_1', widget_instances: {
        20: ['mxcbnvlkshdjf2345kasjdf', 'sdksdkjls2343489iueoqw']
      }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_1',
      widget_instances: { 22: ['ljrjcbnvlkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjls2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'subProduct', campaignId: 'campaign_id_1', subProductId: 'subproduct_2',
      widget_instances: { 23: ['ljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'nfurnfgdyksdkjlsasdkfjh2343489iueoqw'] }, attributes: [11, 12]
    },
    {
      strategyId: 'strategy_id_1', level: 'campaign', campaignId: 'campaign_id_2',
      widget_instances: { 24: ['asdfsljrjcbnvlasdfkjkshdjf234sdfa5kasjdf', 'asdfasdfnfurnfgdyksdkjlsasdkfjh2343489iueoqw'] },
      attributes: [11, 12]
    },
  ];

  ngOnInit() {
    this.demo();
  }

  async demo() {
    this.db = await openDB('TestTreeStore', 1, {
      upgrade(db) {
        // Create a store of objects
        if (!db.objectStoreNames.contains('testTreeStore')) {
          const store = db.createObjectStore('testTreeStore', {
            // The 'id' property of the object will be the key.
            keyPath: 'id',
            // If it isn't explicitly set, create a value by auto incrementing.
            autoIncrement: true,
          });
          // Create an indexa on the properties of the objects.
          store.createIndex('strategyId', 'strategyId', { unique: false });
          store.createIndex('campaignId', 'campaignId', { unique: false });
          store.createIndex('subProductId', 'subProductId', { unique: false });
          store.createIndex('level', 'level');
        }
      },
    });
    const dbData = await this.db.getAll('testTreeStore');
    if (dbData.length === 0) {
      console.time();
      const tx = this.db.transaction('testTreeStore', 'readwrite');
      for (const data of this.testData) {
        tx.store.add(data);
      }
      console.timeEnd();
      await tx.done;
    }
    this.updataData();
  }

  async updataData() {
    const tx = this.db.transaction('testTreeStore', 'readwrite');
    const dataStore = tx.objectStore('testTreeStore');
    console.time();
    const values = await this.db.getAllFromIndex('testTreeStore', 'campaignId', 'campaign_id_2');
    console.timeEnd();
    console.time();
    for (const val of values) {
      const test = { ...val };
      test.attributes = [28, 30];
      this.db.put('testTreeStore', test);
    }
    await tx.done;
    console.timeEnd();
    const valuesOut = await this.db.getAllFromIndex('testTreeStore', 'strategyId', 'strategy_id_1');
    console.log(valuesOut);
  }
}

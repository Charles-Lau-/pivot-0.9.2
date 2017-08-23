"use strict";
var plywood_1 = require('plywood');
var index_1 = require('../../../common/manifests/index');
var data_source_mock_1 = require('../data-source/data-source.mock');
var link_view_config_mock_1 = require('../link-view-config/link-view-config.mock');
var app_settings_1 = require('./app-settings');
var SMALL_WIKI_DATA = [
    {
        "time": new Date("2015-09-12T00:46:58Z"),
        "channel": "en",
        "cityName": null,
        "comment": "added project",
        "commentLength": 13,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": false,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Talk",
        "page": "Talk:Oswald Tilghman",
        "regionIsoCode": null,
        "regionName": null,
        "user": "GELongstreet",
        "userChars": ["E", "G", "L", "N", "O", "R", "S", "T"],
        "delta": 36,
        "added": 36,
        "deleted": 0,
        "deltaByTen": 3.6
    },
    {
        "time": new Date("2015-09-12T00:47:00Z"),
        "channel": "ca",
        "cityName": null,
        "comment": "Robot inserta {{Commonscat}} que enllaça amb [[commons:category:Rallicula]]",
        "commentLength": 75,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": true,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Rallicula",
        "regionIsoCode": null,
        "regionName": null,
        "user": "PereBot",
        "userChars": ["B", "E", "O", "P", "R", "T"],
        "delta": 17,
        "added": 17,
        "deleted": 0,
        "deltaByTen": 1.7
    },
    {
        "time": new Date("2015-09-12T00:47:05Z"),
        "channel": "en",
        "cityName": "Auburn",
        "comment": "/* Status of peremptory norms under international law */ fixed spelling of 'Wimbledon'",
        "commentLength": 86,
        "countryIsoCode": "AU",
        "countryName": "Australia",
        "deltaBucket100": 0,
        "isAnonymous": true,
        "isMinor": false,
        "isNew": false,
        "isRobot": false,
        "isUnpatrolled": false,
        "metroCode": "123",
        "namespace": "Main",
        "page": "Peremptory norm",
        "regionIsoCode": "NSW",
        "regionName": "New South Wales",
        "user": "60.225.66.142",
        "userChars": [".", "0", "1", "2", "4", "5", "6"],
        "delta": 0,
        "added": 0,
        "deleted": 0,
        "deltaByTen": 0
    },
    {
        "time": new Date("2015-09-12T00:47:08Z"),
        "channel": "vi",
        "cityName": null,
        "comment": "fix Lỗi CS1: ngày tháng",
        "commentLength": 23,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": true,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Apamea abruzzorum",
        "regionIsoCode": null,
        "regionName": null,
        "user": "Cheers!-bot",
        "userChars": ["!", "-", "B", "C", "E", "H", "O", "R", "S", "T"],
        "delta": 18,
        "added": 18,
        "deleted": 0,
        "deltaByTen": 1.8
    },
    {
        "time": new Date("2015-09-12T00:47:11Z"),
        "channel": "vi",
        "cityName": null,
        "comment": "clean up using [[Project:AWB|AWB]]",
        "commentLength": 34,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Atractus flammigerus",
        "regionIsoCode": null,
        "regionName": null,
        "user": "ThitxongkhoiAWB",
        "userChars": ["A", "B", "G", "H", "I", "K", "N", "O", "T", "W", "X"],
        "delta": 18,
        "added": 18,
        "deleted": 0,
        "deltaByTen": 1.8
    },
    {
        "time": new Date("2015-09-12T00:47:13Z"),
        "channel": "vi",
        "cityName": null,
        "comment": "clean up using [[Project:AWB|AWB]]",
        "commentLength": 34,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Agama mossambica",
        "regionIsoCode": null,
        "regionName": null,
        "user": "ThitxongkhoiAWB",
        "userChars": ["A", "B", "G", "H", "I", "K", "N", "O", "T", "W", "X"],
        "delta": 18,
        "added": 18,
        "deleted": 0,
        "deltaByTen": 1.8
    },
    {
        "time": new Date("2015-09-12T00:47:17Z"),
        "channel": "ca",
        "cityName": null,
        "comment": "/* Imperi Austrohongarès */",
        "commentLength": 27,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": -100,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": false,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Campanya dels Balcans (1914-1918)",
        "regionIsoCode": null,
        "regionName": null,
        "user": "Jaumellecha",
        "userChars": ["A", "C", "E", "H", "J", "L", "M", "U"],
        "delta": -20,
        "added": 0,
        "deleted": 20,
        "deltaByTen": -2
    },
    {
        "time": new Date("2015-09-12T00:47:19Z"),
        "channel": "en",
        "cityName": null,
        "comment": "adding comment on notability and possible COI",
        "commentLength": 45,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 300,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": true,
        "isRobot": false,
        "isUnpatrolled": true,
        "metroCode": null,
        "namespace": "Talk",
        "page": "Talk:Dani Ploeger",
        "regionIsoCode": null,
        "regionName": null,
        "user": "New Media Theorist",
        "userChars": [" ", "A", "D", "E", "H", "I", "M", "N", "O", "R", "S", "T", "W"],
        "delta": 345,
        "added": 345,
        "deleted": 0,
        "deltaByTen": 34.5
    },
    {
        "time": new Date("2015-09-12T00:47:21Z"),
        "channel": "en",
        "cityName": null,
        "comment": "Copying assessment table to wiki",
        "commentLength": 32,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 100,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "User",
        "page": "User:WP 1.0 bot/Tables/Project/Pubs",
        "regionIsoCode": null,
        "regionName": null,
        "user": "WP 1.0 bot",
        "userChars": [" ", ".", "0", "1", "B", "O", "P", "T", "W"],
        "delta": 121,
        "added": 121,
        "deleted": 0,
        "deltaByTen": 12.1
    },
    {
        "time": new Date("2015-09-12T00:47:25Z"),
        "channel": "vi",
        "cityName": null,
        "comment": "clean up using [[Project:AWB|AWB]]",
        "commentLength": 34,
        "countryIsoCode": null,
        "countryName": null,
        "deltaBucket100": 0,
        "isAnonymous": false,
        "isMinor": false,
        "isNew": false,
        "isRobot": true,
        "isUnpatrolled": false,
        "metroCode": null,
        "namespace": "Main",
        "page": "Agama persimilis",
        "regionIsoCode": null,
        "regionName": null,
        "user": "ThitxongkhoiAWB",
        "userChars": ["A", "B", "G", "H", "I", "K", "N", "O", "T", "W", "X"],
        "delta": 18,
        "added": 18,
        "deleted": 0,
        "deltaByTen": 1.8
    }
];
var AppSettingsMock = (function () {
    function AppSettingsMock() {
    }
    AppSettingsMock.wikiOnlyJS = function () {
        return {
            customization: {
                title: "Hello World",
                headerBackground: "brown",
                customLogoSvg: "ansvgstring"
            },
            clusters: [
                {
                    name: 'druid',
                    type: 'druid',
                    host: '192.168.99.100',
                    version: '0.9.1',
                    timeout: 30000,
                    sourceListScan: 'auto',
                    sourceListRefreshInterval: 10000,
                    sourceReintrospectInterval: 10000,
                    introspectionStrategy: 'segment-metadata-fallback'
                }
            ],
            dataSources: [
                data_source_mock_1.DataSourceMock.WIKI_JS
            ]
        };
    };
    AppSettingsMock.wikiWithLinkViewJS = function () {
        return {
            customization: {
                title: "Hello World",
                headerBackground: "brown",
                customLogoSvg: "ansvgstring"
            },
            clusters: [
                {
                    name: 'druid',
                    type: 'druid',
                    host: '192.168.99.100',
                    version: '0.9.1',
                    timeout: 30000,
                    sourceListScan: 'auto',
                    sourceListRefreshInterval: 10000,
                    sourceReintrospectInterval: 10000,
                    introspectionStrategy: 'segment-metadata-fallback'
                }
            ],
            dataSources: [
                data_source_mock_1.DataSourceMock.WIKI_JS
            ],
            linkViewConfig: link_view_config_mock_1.LinkViewConfigMock.testOneTwoJS()
        };
    };
    AppSettingsMock.wikiTwitterJS = function () {
        return {
            customization: {
                title: "Hello World"
            },
            clusters: [
                {
                    name: 'druid',
                    type: 'druid',
                    host: '192.168.99.100',
                    version: '0.9.1',
                    timeout: 30000,
                    sourceListScan: 'auto',
                    sourceListRefreshInterval: 10000,
                    sourceReintrospectInterval: 10000,
                    introspectionStrategy: "segment-metadata-fallback"
                }
            ],
            dataSources: [
                data_source_mock_1.DataSourceMock.WIKI_JS,
                data_source_mock_1.DataSourceMock.TWITTER_JS
            ]
        };
    };
    AppSettingsMock.getContext = function () {
        return {
            visualizations: index_1.MANIFESTS
        };
    };
    AppSettingsMock.wikiOnly = function () {
        return app_settings_1.AppSettings.fromJS(AppSettingsMock.wikiOnlyJS(), AppSettingsMock.getContext());
    };
    AppSettingsMock.wikiOnlyWithExecutor = function () {
        return AppSettingsMock.wikiOnly().attachExecutors(function () {
            return plywood_1.basicExecutorFactory({
                datasets: {
                    main: plywood_1.Dataset.fromJS(SMALL_WIKI_DATA)
                }
            });
        });
    };
    AppSettingsMock.wikiTwitter = function () {
        return app_settings_1.AppSettings.fromJS(AppSettingsMock.wikiTwitterJS(), AppSettingsMock.getContext());
    };
    return AppSettingsMock;
}());
exports.AppSettingsMock = AppSettingsMock;

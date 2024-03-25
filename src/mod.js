"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    postDBLoad(container) {
        const CustomItem = container.resolve("CustomItemService");
        const cinnamorollVudu = {
            name: "cinnamoroll_scope_30mm_eotech_vudu_1_6x24",
            itemTplToClone: "5b3b99475acfc432ff4dcbee",
            overrideProperties: {
                Description: 'cinnamoroll_scope_30mm_eotech_vudu_1_6x24',
                Prefab: {
                    "path": "mods/scopes/scope_30mm_eotech_vudu_1_6x24_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_scope_30mm_eotech_vudu_1_6x24",
                ShortName: 'Cinnamoroll Vudu 6x24'
            },
            parentId: "55818ae44bdc2dde698b456c",
            newId: "CinnamorollVudu",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5d1c819a86f774771b0acd6c",
            locales: {
                "en": {
                    name: "EOTech Vudu 1-6x24 30mm riflescope (Cinnamoroll)",
                    shortName: "Cinnamoroll Vudu",
                    description: "A custom Vudu scope with a Cinnamoroll theme."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollVudu);
        const cinnamorollVltor = {
            name: "cinnamoroll_stock_ar15_vltor_emod",
            itemTplToClone: "5b39f8db5acfc40016387a1b",
            overrideProperties: {
                Description: 'cinnamoroll_stock_ar15_vltor_emod',
                Prefab: {
                    "path": "mods/stocks/stock_ar15_vltor_emod_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_stock_ar15_vltor_emod",
                ShortName: 'Cinnamoroll EMOD'
            },
            parentId: "55818a594bdc2db9688b456a",
            newId: "CinnamorollVltor",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5d1c819a86f774771b0acd6c",
            locales: {
                "en": {
                    name: "Vltor EMOD stock (Cinnamoroll)",
                    shortName: "Cinnamoroll Vltor Emod",
                    description: "The EMOD buttstock designed for AR-15 weapon systems. Manufactured by Sanrio."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollVltor);
    }
    postAkiLoad(container) {
        const db = container.resolve("DatabaseServer");
        const item = db.getTables().templates.items;
        item["57c69dd424597774c03b7bbc"]._props.Slots[0]._props.filters[0].Filter.push("CinnamorollVudu");
        item["5c0faeddd174af02a962601f"]._props.Slots[0]._props.filters[0].Filter.push("CinnamorollVltor");
    }
}
module.exports = { mod: new Mod() };
//# sourceMappingURL=mod.js.map
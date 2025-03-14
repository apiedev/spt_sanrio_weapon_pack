"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
const ItemTpl_1 = require("C:/snapshot/project/obj/models/enums/ItemTpl");
class Sanrio {
    logger;
    postDBLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.AddItems(container);
    }
    postSptLoad(container) {
        const db = container.resolve("DatabaseServer");
        const item = db.getTables().templates.items;
        // ADD HEADSETS
        item[ItemTpl_1.ItemTpl.INVENTORY_DEFAULT]._props.Slots[11]._props.filters[0].Filter.push("67cd00e98bcac3596782fb08");
        // ADD VUDU TO SCOPE MOUNTS
        let mounts = [
            item[ItemTpl_1.ItemTpl.MOUNT_BURRIS_ARPEPR_30MM_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_GEISSELE_SUPER_PRECISION_30MM_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_GEISSELE_SUPER_PRECISION_30MM_RING_SCOPE_MOUNT_DDC],
            item[ItemTpl_1.ItemTpl.MOUNT_JP_ENTERPRISES_FLATTOP_30MM_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_LOBAEV_ARMS_30MM_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_M700_30MM_INTEGRAL_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_NIGHTFORCE_MAGMOUNT_30MM_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_RECKNAGEL_ERATAC_30MM_RING_SCOPE],
            item[ItemTpl_1.ItemTpl.MOUNT_SIG_ALPHA4_30MM_RING_SCOPE]
        ];
        mounts.forEach((mount) => {
            mount._props.Slots[0]._props.filters[0].Filter.push("67cb5a0a15f5a376aa74b1c7");
        });
        // ADD EMOD TO BUFFER TUBE
        const tubes = [
            item[ItemTpl_1.ItemTpl.STOCK_AK12_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AK545_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AK74M_CAA_AKTS_AK74_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AKMAK74_CAA_AKTS_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_ADAR_215_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_COLT_CARBINE_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_RTM_ATP_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_SOYUZTM_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_STRIKE_INDUSTRIES_ADVANCED_RECEIVER_EXTENSION_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_AR15_STRIKE_INDUSTRIES_ADVANCED_RECEIVER_EXTENSION_BUFFER_TUBE_ANODIZED_RED],
            item[ItemTpl_1.ItemTpl.STOCK_CMMG_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_FAB_DEFENSE_BUFFER_TUBE_FOR_AGR870],
            item[ItemTpl_1.ItemTpl.STOCK_FN_SCAR_VLTOR_RESCAR_STOCK_ADAPTER],
            item[ItemTpl_1.ItemTpl.STOCK_FN_SCAR_VLTOR_RESCAR_STOCK_ADAPTER_PATRIOT_BROWN],
            item[ItemTpl_1.ItemTpl.STOCK_HK_ENHANCED_TUBE_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_HK_G36_TOMMY_BUILT_AR_STOCK_ADAPTER],
            item[ItemTpl_1.ItemTpl.STOCK_M870_MESA_TACTICAL_LEO_STOCK_ADAPTER],
            item[ItemTpl_1.ItemTpl.STOCK_MESA_TACTICAL_CROSSHAIR_HYDRAULIC_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_RPK16_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.STOCK_SKS_TAPCO_INTRAFUSE_BUFFER_TUBE],
            item[ItemTpl_1.ItemTpl.PISTOLGRIP_AS_VAL_ROTOR_43_PISTOL_GRIP_WITH_BUFFER_TUBE]
        ];
        tubes.forEach((tube) => {
            tube._props.Slots[0]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e76");
        });
        // ADD HIGH SPACER TO MOUNTS
        mounts = [
            item[ItemTpl_1.ItemTpl.MOUNT_AIMPOINT_MICRO_H2_STANDARD],
            item[ItemTpl_1.ItemTpl.MOUNT_AIMPOINT_MICRO_STANDARD],
            item[ItemTpl_1.ItemTpl.MOUNT_GBRS_AIMPOINT_HYDRA_MOUNT_KIT_BLACK],
            item[ItemTpl_1.ItemTpl.MOUNT_GBRS_AIMPOINT_HYDRA_MOUNT_KIT_FDE]
        ];
        mounts.forEach((mount) => {
            mount._props.Slots[0]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e77");
        });
        // ADD MAGAZINE TO GUNS
        let guns = [
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_ADAR_215_556X45_CARBINE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_LONE_STAR_TX15_DML_556X45_CARBINE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_COLT_M4A1_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_DESERT_TECH_MDR_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_FN_SCARL_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_FN_SCARL_556X45_ASSAULT_RIFLE_FDE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_HK_416A5_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_HK_G36_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_SIG_MCX_300_BLACKOUT_ASSAULT_RIFLE]
        ];
        guns.forEach((gun) => {
            gun._props.Slots[1]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e7c");
        });
        // ADD CHARGE HANDLE TO GUNS
        guns = [
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_ADAR_215_556X45_CARBINE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_LONE_STAR_TX15_DML_556X45_CARBINE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_COLT_M4A1_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.ASSAULTRIFLE_HK_416A5_556X45_ASSAULT_RIFLE],
            item[ItemTpl_1.ItemTpl.SMG_SOYUZTM_STM9_GEN2_9X19_CARBINE]
        ];
        guns.forEach((gun) => {
            gun._props.Slots[4]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e7f");
        });
    }
    AddItems(container) {
        const CustomItem = container.resolve("CustomItemService");
        // const cinnamorollVudu: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.OPTICSCOPE_EOTECH_VUDU_16X24_30MM_RIFLESCOPE,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_scope_30mm_eotech_vudu_1_6x24',
        //         Prefab: {
        //             "path": "cinnamoroll/scope_30mm_eotech_vudu_1_6x24_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_scope_30mm_eotech_vudu_1_6x24",
        //         ShortName: 'Cinnamoroll Vudu 6x24'
        //     },
        //     parentId: "55818ae44bdc2dde698b456c",
        //     newId: "67ca3e89ccde2501bbf91e75",
        //     fleaPriceRoubles: 125000,
        //     handbookPriceRoubles: 35000,
        //     handbookParentId: "5b5f748386f774093e6cb501",
        //     locales: {
        //         "en": {
        //             name: "EOTech Vudu 1-6x24 30mm riflescope (Cinnamoroll)",
        //             shortName: "Cinnamoroll Vudu",
        //             description: "A custom Vudu scope with a Cinnamoroll theme."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollVudu);
        // this.logger.log("CinnamorollVudu added to the database.", "bold cyan");
        const cinnamorollRazor = {
            itemTplToClone: ItemTpl_1.ItemTpl.OPTICSCOPE_VORTEX_RAZOR_HD_GEN2_16X24_30MM_RIFLESCOPE,
            overrideProperties: {
                Description: 'cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24',
                Prefab: {
                    "path": "cinnamoroll/scope_30mm_razor_hd_gen_2_1_6x24_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24",
                ShortName: 'cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24'
            },
            parentId: "55818ae44bdc2dde698b456c",
            newId: "67cb5a0a15f5a376aa74b1c7",
            fleaPriceRoubles: 125000,
            handbookPriceRoubles: 35000,
            handbookParentId: "5b5f748386f774093e6cb501",
            locales: {
                "en": {
                    name: "Vortex Razor 1-6x24 30mm riflescope (Cinnamoroll)",
                    shortName: "Cinnamoroll Razor",
                    description: "A custom Razor scope with a Cinnamoroll theme."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollRazor);
        this.logger.log("CinnamorollRazor added to the database.", "bold cyan");
        const comtacSixBlack = {
            itemTplToClone: ItemTpl_1.ItemTpl.HEADPHONES_PELTOR_COMTAC_VI_HEADSET_COYOTE_BROWN,
            overrideProperties: {
                Description: 'item_equipment_headset_comtac_vi_black',
                Prefab: {
                    "path": "item_equipment_headset_comtac_6_black.bundle",
                    "rcid": ""
                },
                Name: "item_equipment_headset_comtac_vi_black",
                ShortName: 'item_equipment_headset_comtac_vi_black'
            },
            parentId: "5645bcb74bdc2ded0b8b4578",
            newId: "67cd00e98bcac3596782fb08",
            fleaPriceRoubles: 125000,
            handbookPriceRoubles: 72548,
            handbookParentId: "5b5f6f3c86f774094242ef87",
            locales: {
                "en": {
                    name: "Peltor ComTac VI headset (Black)",
                    shortName: "ComTac VI (Black)",
                    description: "An improved version of the ComTac V communication headset, equipped with advanced environmental listening settings and an NIB (Natural Interaction Behavior) feature, allowing to communicate with other ComTac VI users in a certain proximity without having to use radios. Manufactured by 3M Peltor. Black version."
                }
            }
        };
        CustomItem.createItemFromClone(comtacSixBlack);
        this.logger.log("ComtacSixBlack added to the database.", "bold cyan");
        const cinnamorollVltor = {
            itemTplToClone: ItemTpl_1.ItemTpl.STOCK_AR15_VLTOR_EMOD,
            overrideProperties: {
                Description: 'cinnamoroll_stock_ar15_vltor_emod',
                Prefab: {
                    "path": "cinnamoroll/stock_ar15_vltor_emod_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_stock_ar15_vltor_emod",
                ShortName: 'Cinnamoroll EMOD'
            },
            parentId: "55818a594bdc2db9688b456a",
            newId: "67ca3e89ccde2501bbf91e76",
            fleaPriceRoubles: 30000,
            handbookPriceRoubles: 10000,
            handbookParentId: "5b5f757486f774093e6cb507",
            locales: {
                "en": {
                    name: "Vltor EMOD stock (Cinnamoroll)",
                    shortName: "Cinnamoroll Vltor Emod",
                    description: "The EMOD buttstock designed for AR-15 weapon systems. Manufactured by Sanrio."
                },
                "ru": {
                    name: "Приклад Vltor EMOD (Cinnamoroll)",
                    shortName: "Cinnamoroll EMOD",
                    description: "Приклад EMOD, разработанный для оружейных систем AR-15. Производства Sanrio."
                },
                "de": {
                    name: "Vltor EMOD Schaft (Cinnamoroll)",
                    shortName: "Cinnamoroll EMOD",
                    description: "Der EMOD-Schaft für AR-15 Waffensysteme. Hergestellt von Sanrio."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollVltor);
        this.logger.log("CinnamorollVltor added to the database.", "bold cyan");
        // const cinnamorollSpacerHigh: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.MOUNT_AIMPOINT_MICRO_SPACER_HIGH,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_mount_base_aimpoint_h1_t1_spacer',
        //         Prefab: {
        //             "path": "cinnamoroll/mount_base_aimpoint_h1_t1_spacer_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_mount_base_aimpoint_h1_t1_spacer",
        //         ShortName: 'Cinnamoroll Aimpoint Spacer High'
        //     },
        //     parentId: "55818b224bdc2dde698b456f",
        //     newId: "67ca3e89ccde2501bbf91e77",
        //     fleaPriceRoubles: 9000,
        //     handbookPriceRoubles: 2000,
        //     handbookParentId: "5b5f755f86f77447ec5d770e",
        //     locales: {
        //         "en": {
        //             name: "Aimpoint Standard Spacer High (Cinnamoroll)",
        //             shortName: "Cinnamoroll SS",
        //             description: "The Standard Spacer mount for Aimpoint CompM4 sight models, raises the scope mount position. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Стандартная проставка Aimpoint High (Cinnamoroll)",
        //             shortName: "Cinnamoroll SS",
        //             description: "Стандартная проставка для прицелов Aimpoint CompM4, увеличивает высоту установки прицела. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "Aimpoint Standard Spacer High (Cinnamoroll)",
        //             shortName: "Cinnamoroll SS",
        //             description: "Die Standard-Spacer-Halterung für Aimpoint CompM4-Visiermodelle erhöht die Visiermontageposition. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollSpacerHigh);
        // this.logger.log("CinnamorollSpacerHigh added to the database.", "bold cyan");
        // const cinnamorollInsight: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.TACTICALCOMBO_INSIGHT_WMX200_TACTICAL_FLASHLIGHT,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_tactical_all_insight_wmx200',
        //         Prefab: {
        //             "path": "cinnamoroll/tactical_all_insight_anpeq15_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_tactical_all_insight_wmx200",
        //         ShortName: 'Cinnamoroll WMX200'
        //     },
        //     parentId: "55818b164bdc2ddc698b456c",
        //     newId: "67ca3e89ccde2501bbf91e78",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f737886f774093e6cb4fb",
        //     locales: {
        //         "en": {
        //             name: "Insight WMX200 tactical flashlight (Cinnamoroll)",
        //             shortName: "Cinnamoroll WMX200",
        //             description: "The WMX200 tactical flashlight manufactured by Insight Technologies, which combines a conventional flashlight and an IR searchlight. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Тактический фонарь Insight WMX200 (Cinnamoroll)",
        //             shortName: "Cinnamoroll WMX200",
        //             description: "Тактический фонарь WMX200 производства Insight Technologies, который сочетает в себе обычный фонарь и ИК-прожектор. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "Insight WMX200 taktische Taschenlampe (Cinnamoroll)",
        //             shortName: "Cinnamoroll WMX200",
        //             description: "Die taktische Taschenlampe WMX200 von Insight Technologies, die eine herkömmliche Taschenlampe und einen IR-Scheinwerfer kombiniert. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollInsight);
        // this.logger.log("CinnamorollInsight added to the database.", "bold cyan");
        // const cinnamorollAimpoint: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.COMPACTCOLLIMATOR_AIMPOINT_MICRO_T1_REFLEX_SIGHT,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_scope_base_aimpoint_micro_t1',
        //         Prefab: {
        //             "path": "cinnamoroll/scope_base_aimpoint_micro_t1_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_scope_base_aimpoint_micro_t1",
        //         ShortName: 'Cinnamoroll Micro T1'
        //     },
        //     parentId: "55818acf4bdc2dde698b456b",
        //     newId: "67ca3e89ccde2501bbf91e79",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f748386f774093e6cb501",
        //     locales: {
        //         "en": {
        //             name: "Aimpoint Micro T-1 reflex sight (Cinnamoroll)",
        //             shortName: "Cinnamoroll T-1",
        //             description: "The Micro T-1 compact reflex sight by Aimpoint was designed for use with any kind of firearms and even with bows. Lightweight, compact, and durable. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Коллиматорный прицел Aimpoint Micro T-1 (Cinnamoroll)",
        //             shortName: "Cinnamoroll T-1",
        //             description: "Компактный коллиматорный прицел Micro T-1 от Aimpoint был разработан для использования с любым видом огнестрельного оружия и даже с луками. Легкий, компактный и прочный. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "Aimpoint Micro T-1 Reflexvisier (Cinnamoroll)",
        //             shortName: "Cinnamoroll T-1",
        //             description: "Das kompakte Micro T-1 Reflexvisier von Aimpoint wurde für den Einsatz mit allen Arten von Feuerwaffen und sogar mit Bögen entwickelt. Leicht, kompakt und langlebig. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollAimpoint);
        // this.logger.log("CinnamorollAimpoint added to the database.", "bold cyan");
        // const cinnamorollNoveske: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.RECEIVER_AR15_NOVESKE_GEN3_556X45_UPPER,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_reciever_ar15_noveske_gen3_stripped',
        //         Prefab: {
        //             "path": "cinnamoroll/reciever_ar15_noveske_gen3_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_reciever_ar15_noveske_gen3_stripped",
        //         ShortName: 'Cinnamoroll Gen3 Reciever'
        //     },
        //     parentId: "55818a304bdc2db5418b457d",
        //     newId: "67ca3e89ccde2501bbf91e7a",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f764186f77447ec5d7714",
        //     locales: {
        //         "en": {
        //             name: "AR-15 Noveske Gen.3 5.56x45 upper receiver (Cinnamoroll)",
        //             shortName: "Cinnamoroll Gen.3",
        //             description: "The Gen.3 modular upper receiver for AR-based weapons, manufactured by Noveske. Fitted with mounts for attaching additional equipment. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Верхний ресивер AR-15 Noveske Gen.3 5.56x45 (Cinnamoroll)",
        //             shortName: "Cinnamoroll Gen.3",
        //             description: "Модульный верхний ресивер Gen.3 для оружия на базе AR, производства Noveske. Оснащен креплениями для установки дополнительного оборудования. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "AR-15 Noveske Gen.3 5,56x45 Upper Receiver (Cinnamoroll)",
        //             shortName: "Cinnamoroll Gen.3",
        //             description: "Der modulare Gen.3 Upper Receiver für AR-basierte Waffen, hergestellt von Noveske. Mit Halterungen für die Befestigung zusätzlicher Ausrüstung ausgestattet. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollNoveske);
        // this.logger.log("CinnamorollNoveske added to the database.", "bold cyan");
        // const cinnamorollST2: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.PISTOLGRIP_AR15_F1_FIREARMS_SKELETONIZED_STYLE_2_PC_PISTOL_GRIP,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_pistolgrip_ar15_f1_firearms_st2_pc_skeletonized',
        //         Prefab: {
        //             "path": "cinnamoroll/pistolgrip_ar15_f1_firearms_st2_pc_skeletonized_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_pistolgrip_ar15_f1_firearms_st2_pc_skeletonized",
        //         ShortName: 'Cinnamoroll ST2'
        //     },
        //     parentId: "55818a684bdc2ddd698b456d",
        //     newId: "67ca3e89ccde2501bbf91e7b",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f761f86f774094242f1a1",
        //     locales: {
        //         "en": {
        //             name: "AR-15 F1 Firearms Skeletonized Style 2 PC pistol grip (Cinnamoroll)",
        //             shortName: "Cinnamoroll F1 St2 PC",
        //             description: "A lightweight ergonomical pistol grip with finger grooves for AR-15 weapon systems, manufactured by F1 Firearms. Wrapped with paracord for maximum comfort and minimum hand slip. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Пистолетная рукоять AR-15 F1 Firearms Skeletonized Style 2 PC (Cinnamoroll)",
        //             shortName: "Cinnamoroll F1 St2 PC",
        //             description: "Легкая эргономичная пистолетная рукоять с выемками под пальцы для оружейных систем AR-15, производства F1 Firearms. Обмотана паракордом для максимального комфорта и минимального скольжения руки. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "AR-15 F1 Firearms Skeletonized Style 2 PC Pistolengriff (Cinnamoroll)",
        //             shortName: "Cinnamoroll F1 St2 PC",
        //             description: "Ein leichter, ergonomischer Pistolengriff mit Fingerrillen für AR-15-Waffensysteme, hergestellt von F1 Firearms. Mit Paracord umwickelt für maximalen Komfort und minimalen Handrutsch. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollST2);
        // this.logger.log("CinnamorollST2 added to the database.", "bold cyan");
        const cinnamorollGenM3 = {
            itemTplToClone: ItemTpl_1.ItemTpl.MAGAZINE_556X45_GEN_M3_WINDOW_30RND,
            overrideProperties: {
                Description: 'cinnamoroll_mag_stanag_magpul_pmag_gen_m3_window_556x45_30',
                Prefab: {
                    "path": "cinnamoroll/mag_stanag_magpul_pmag_gen_m3_556x45_30_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_mag_stanag_magpul_pmag_gen_m3_window_556x45_30",
                ShortName: 'Cinnamoroll Gen M3'
            },
            parentId: "5448bc234bdc2d3c308b4569",
            newId: "67ca3e89ccde2501bbf91e7c",
            fleaPriceRoubles: 20000,
            handbookPriceRoubles: 5000,
            handbookParentId: "5b5f754a86f774094242f19b",
            locales: {
                "en": {
                    name: "5.56x45 Magpul PMAG 30 GEN M3 W STANAG 30-round magazine (Cinnamoroll)",
                    shortName: "Cinnamoroll GEN M3",
                    description: "A 30-round 5.56x45 Magpul PMAG GEN M3 30 polymer magazine with an observation slot for faster capacity checking. Manufactured by Sanrio."
                },
                "ru": {
                    name: "Магазин 5.56x45 Magpul PMAG 30 GEN M3 W STANAG на 30 патронов (Cinnamoroll)",
                    shortName: "Cinnamoroll GEN M3",
                    description: "30-зарядный полимерный магазин 5.56x45 Magpul PMAG GEN M3 30 со смотровым окном для быстрой проверки вместимости. Производства Sanrio."
                },
                "de": {
                    name: "5,56x45 Magpul PMAG 30 GEN M3 W STANAG 30-Schuss-Magazin (Cinnamoroll)",
                    shortName: "Cinnamoroll GEN M3",
                    description: "Ein 30-Schuss-5,56x45 Magpul PMAG GEN M3 30 Polymer-Magazin mit Beobachtungsschlitz für schnellere Kapazitätsprüfung. Hergestellt von Sanrio."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollGenM3);
        this.logger.log("cinnamorollGenM3 added to the database.", "bold cyan");
        // const cinnamorollURX38: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.HANDGUARD_AR15_KAC_URX_3_8_INCH,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_handguard_ar15_kac_urx_3_8_inch',
        //         Prefab: {
        //             "path": "cinnamoroll/handguard_ar15_kac_urx_3_8_inch_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_handguard_ar15_kac_urx_3_8_inch",
        //         ShortName: 'Cinnamoroll URX 3.8'
        //     },
        //     parentId: "55818a104bdc2db9688b4569",
        //     newId: "67ca3e89ccde2501bbf91e7d",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f75e486f77447ec5d7712",
        //     locales: {
        //         "en": {
        //             name: "AR-15 KAC URX 3 8 inch handguard (Cinnamoroll)",
        //             shortName: "Cinnamoroll URX3 8",
        //             description: "The Knight's Armament URX 3 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Цевье AR-15 KAC URX 3 8 дюймов (Cinnamoroll)",
        //             shortName: "Cinnamoroll URX3 8",
        //             description: "Цевье Knight's Armament URX 3 для AR-15, оснащенное уникальным интерфейсом для установки дополнительных устройств и аксессуаров. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "AR-15 KAC URX 3 8 Zoll Handschutz (Cinnamoroll)",
        //             shortName: "Cinnamoroll URX3 8",
        //             description: "Der Knight's Armament URX 3 Handschutz für AR-15, ausgestattet mit einer einzigartigen Schnittstelle für die Installation zusätzlicher Geräte und Zubehörteile. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollURX38);
        // this.logger.log("cinnamorollURX38 added to the database.", "bold cyan");
        // const cinnamorollURX1075: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.HANDGUARD_AR15_KAC_URX_31_1075_INCH,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch',
        //         Prefab: {
        //             "path": "cinnamoroll/handguard_ar15_kac_urx_31_10,75_inch_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch",
        //         ShortName: 'Cinnamoroll URX 10.75'
        //     },
        //     parentId: "55818a104bdc2db9688b4569",
        //     newId: "67ca3e89ccde2501bbf91e7e",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f75e486f77447ec5d7712",
        //     locales: {
        //         "en": {
        //             name: "AR-15 KAC URX 3.1 10.75 inch handguard (Cinnamoroll)",
        //             shortName: "URX3.1 10.75",
        //             description: "The Knight's Armament URX 3.1 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Цевье AR-15 KAC URX 3.1 10.75 дюймов (Cinnamoroll)",
        //             shortName: "URX3.1 10.75",
        //             description: "Цевье Knight's Armament URX 3.1 для AR-15, оснащенное уникальным интерфейсом для установки дополнительных устройств и аксессуаров. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "AR-15 KAC URX 3.1 10.75 Zoll Handschutz (Cinnamoroll)",
        //             shortName: "URX3.1 10.75",
        //             description: "Der Knight's Armament URX 3.1 Handschutz für AR-15, ausgestattet mit einer einzigartigen Schnittstelle für die Installation zusätzlicher Geräte und Zubehörteile. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollURX1075);
        // this.logger.log("cinnamorollURX1075 added to the database.", "bold cyan");
        const cinnamorollAvalanche = {
            itemTplToClone: ItemTpl_1.ItemTpl.CHARGE_AR15_RAINIER_ARMS_AVALANCHE_MOD2_CHARGING_HANDLE,
            overrideProperties: {
                Description: 'cinnamoroll_charge_ar15_rainer_arms_avalanche_mod2',
                Prefab: {
                    "path": "cinnamoroll/charge_ar15_rainer_arms_avalanche_mod2_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_charge_ar15_rainer_arms_avalanche_mod2",
                ShortName: 'Cinnamoroll Avalanche Mod2'
            },
            parentId: "55818a6f4bdc2db9688b456b",
            newId: "67ca3e89ccde2501bbf91e7f",
            fleaPriceRoubles: 40000,
            handbookPriceRoubles: 5000,
            handbookParentId: "5b5f751486f77447ec5d770c",
            locales: {
                "en": {
                    name: "AR-15 Rainier Arms Avalanche MOD2 charging handle (Cinnamoroll)",
                    shortName: "Avalanche",
                    description: "The Avalanche MOD2 charging handle for AR-15 and compatible systems. Manufactured by Rainier Arms. Manufactured by Sanrio."
                },
                "ru": {
                    name: "Зарядная рукоять AR-15 Rainier Arms Avalanche MOD2 (Cinnamoroll)",
                    shortName: "Avalanche",
                    description: "Зарядная рукоять Avalanche MOD2 для AR-15 и совместимых систем. Производства Rainier Arms. Производства Sanrio."
                },
                "de": {
                    name: "AR-15 Rainier Arms Avalanche MOD2 Ladehebel (Cinnamoroll)",
                    shortName: "Avalanche",
                    description: "Der Avalanche MOD2 Ladehebel für AR-15 und kompatible Systeme. Hergestellt von Rainier Arms. Hergestellt von Sanrio."
                }
            }
        };
        CustomItem.createItemFromClone(cinnamorollAvalanche);
        this.logger.log("cinnamorollAvalanche added to the database.", "bold cyan");
        // const cinnamorollForegripBcm: NewItemFromCloneDetails = {
        //     itemTplToClone: ItemTpl.FOREGRIP_BCM_GUNFIGHTER_MOD_3_VERTICAL,
        //     overrideProperties: {
        //         Description: 'cinnamoroll_foregrip_all_bcm_mod_3',
        //         Prefab: {
        //             "path": "cinnamoroll/foregrip_all_bcm_mod_3_cinnamoroll.bundle",
        //             "rcid": ""
        //         },
        //         Name: "cinnamoroll_foregrip_all_bcm_mod_3",
        //         ShortName: 'Cinnamoroll BCM foregrip'
        //     },
        //     parentId: "55818af64bdc2d5b648b4570",
        //     newId: "67ca3e89ccde2501bbf91e80",
        //     fleaPriceRoubles: 50000,
        //     handbookPriceRoubles: 42500,
        //     handbookParentId: "5b5f71de86f774093f2ecf13",
        //     locales: {
        //         "en": {
        //             name: "BCM GUNFIGHTER MOD 3 vertical foregrip (Cinnamoroll)",
        //             shortName: "GF MOD3",
        //             description: "A lightweight polymer tactical grip manufactured by BCM. Manufactured by Sanrio."
        //         },
        //         "ru": {
        //             name: "Вертикальная рукоять BCM GUNFIGHTER MOD 3 (Cinnamoroll)",
        //             shortName: "GF MOD3",
        //             description: "Легкая полимерная тактическая рукоять производства BCM. Производства Sanrio."
        //         },
        //         "de": {
        //             name: "BCM GUNFIGHTER MOD 3 vertikaler Vordergriff (Cinnamoroll)",
        //             shortName: "GF MOD3",
        //             description: "Ein leichter taktischer Polymergriff hergestellt von BCM. Hergestellt von Sanrio."
        //         }
        //     }
        // }
        // CustomItem.createItemFromClone(cinnamorollForegripBcm);
        // this.logger.log("cinnamorollForegripBcm added to the database.", "bold cyan");
    }
}
exports.mod = new Sanrio();
//# sourceMappingURL=mod.js.map
import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt-aki/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt-aki/models/spt/mod/NewItemDetails";
import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import {IPreAkiLoadMod} from "@spt-aki/models/external/IPreAkiLoadMod";
import {ILogger} from "@spt-aki/models/spt/utils/ILogger";

class Mod implements IPostDBLoadMod, IPostAkiLoadMod, IPreAkiLoadMod
{
    private logger: ILogger

    public preAkiLoad(container: DependencyContainer): void {
        this.logger = container.resolve<ILogger>("WinstonLogger");
    }

    public postDBLoad(container: DependencyContainer): void 
    {
        this.AddItems(container);
    }

    public postAkiLoad(container: DependencyContainer): void {
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const item = db.getTables().templates.items;

        item["57c69dd424597774c03b7bbc"]._props.Slots[0]._props.filters[0].Filter.push("CinnamorollVudu");
        item["5c0faeddd174af02a962601f"]._props.Slots[0]._props.filters[0].Filter.push("CinnamorollVltor");
    }

    public AddItems(container: DependencyContainer) {
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        const cinnamorollVudu: NewItemFromCloneDetails = {
            itemTplToClone: "5b3b99475acfc432ff4dcbee",
            overrideProperties: {
                Description: 'cinnamoroll_scope_30mm_eotech_vudu_1_6x24',
                Prefab: {
                    "path": "cinnamoroll/scope_30mm_eotech_vudu_1_6x24_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_scope_30mm_eotech_vudu_1_6x24",
                ShortName: 'Cinnamoroll Vudu 6x24'
            },
            parentId: "55818ae44bdc2dde698b456c",
            newId: "CinnamorollVudu",
            fleaPriceRoubles: 50000, //Self explanatary
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f748386f774093e6cb501",
            locales: {
                "en": {
                    name: "EOTech Vudu 1-6x24 30mm riflescope (Cinnamoroll)",
                    shortName: "Cinnamoroll Vudu",
                    description: "A custom Vudu scope with a Cinnamoroll theme."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollVudu);
        this.logger.log("CinnamorollVudu added to the database.", "bold cyan");

        const cinnamorollVltor: NewItemFromCloneDetails = {
            itemTplToClone: "5b39f8db5acfc40016387a1b",
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
            newId: "CinnamorollVltor",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f757486f774093e6cb507",
            locales: {
                "en": {
                    name: "Vltor EMOD stock (Cinnamoroll)",
                    shortName: "Cinnamoroll Vltor Emod",
                    description: "The EMOD buttstock designed for AR-15 weapon systems. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollVltor);
        this.logger.log("CinnamorollVltor added to the database.", "bold cyan");

        const cinnamorollSpacer: NewItemFromCloneDetails = {
            itemTplToClone: "5c7d560b2e22160bc12c6139",
            overrideProperties: {
                Description: 'cinnamoroll_mount_base_aimpoint_h1_t1_spacer',
                Prefab: {
                    "path": "cinnamoroll/mount_base_aimpoint_h1_t1_spacer_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_mount_base_aimpoint_h1_t1_spacer",
                ShortName: 'Cinnamoroll Aimpoint Spacer'
            },
            parentId: "55818b224bdc2dde698b456f",
            newId: "CinnamorollSpacer",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f755f86f77447ec5d770e",
            locales: {
                "en": {
                    name: "Aimpoint Standard Spacer (Cinnamoroll)",
                    shortName: "Cinnamoroll SS",
                    description: "The Standard Spacer mount for Aimpoint CompM4 sight models, raises the scope mount position. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollSpacer);
        this.logger.log("CinnamorollSpacer added to the database.", "bold cyan");

        const cinnamorollInsight: NewItemFromCloneDetails = {
            itemTplToClone: "626becf9582c3e319310b837",
            overrideProperties: {
                Description: 'cinnamoroll_tactical_all_insight_wmx200',
                Prefab: {
                    "path": "cinnamoroll/tactical_all_insight_anpeq15_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_tactical_all_insight_wmx200",
                ShortName: 'Cinnamoroll WMX200'
            },
            parentId: "55818b164bdc2ddc698b456c",
            newId: "CinnamorollInsight",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f737886f774093e6cb4fb",
            locales: {
                "en": {
                    name: "Insight WMX200 tactical flashlight (Cinnamoroll)",
                    shortName: "Cinnamoroll WMX200",
                    description: "The WMX200 tactical flashlight manufactured by Insight Technologies, which combines a conventional flashlight and an IR searchlight. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollInsight);
        this.logger.log("CinnamorollInsight added to the database.", "bold cyan");

        const cinnamorollAimpoint: NewItemFromCloneDetails = {
            itemTplToClone: "58d399e486f77442e0016fe7",
            overrideProperties: {
                Description: 'cinnamoroll_scope_base_aimpoint_micro_t1',
                Prefab: {
                    "path": "cinnamoroll/scope_base_aimpoint_micro_t1_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_scope_base_aimpoint_micro_t1",
                ShortName: 'Cinnamoroll Micro T1'
            },
            parentId: "55818acf4bdc2dde698b456b",
            newId: "CinnamorollAimpoint",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f748386f774093e6cb501",
            locales: {
                "en": {
                    name: "Aimpoint Micro T-1 reflex sight (Cinnamoroll)",
                    shortName: "Cinnamoroll T-1",
                    description: "The Micro T-1 compact reflex sight by Aimpoint was designed for use with any kind of firearms and even with bows. Lightweight, compact, and durable. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollAimpoint);
        this.logger.log("CinnamorollAimpoint added to the database.", "bold cyan");

        const cinnamorollNoveske: NewItemFromCloneDetails = {
            itemTplToClone: "5c07a8770db8340023300450",
            overrideProperties: {
                Description: 'cinnamoroll_reciever_ar15_noveske_gen3_stripped',
                Prefab: {
                    "path": "cinnamoroll/reciever_ar15_noveske_gen3_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_reciever_ar15_noveske_gen3_stripped",
                ShortName: 'Cinnamoroll Gen3 Reciever'
            },
            parentId: "55818a304bdc2db5418b457d",
            newId: "CinnamorollNoveske",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f764186f77447ec5d7714",
            locales: {
                "en": {
                    name: "AR-15 Noveske Gen.3 5.56x45 upper receiver (Cinnamoroll)",
                    shortName: "Cinnamoroll Gen.3",
                    description: "The Gen.3 modular upper receiver for AR-based weapons, manufactured by Noveske. Fitted with mounts for attaching additional equipment. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollNoveske);
        this.logger.log("CinnamorollNoveske added to the database.", "bold cyan");

        const cinnamorollST2: NewItemFromCloneDetails = {
            itemTplToClone: "6113cc78d3a39d50044c065a",
            overrideProperties: {
                Description: 'cinnamoroll_pistolgrip_ar15_f1_firearms_st2_pc_skeletonized',
                Prefab: {
                    "path": "cinnamoroll/pistolgrip_ar15_f1_firearms_st2_pc_skeletonized_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_pistolgrip_ar15_f1_firearms_st2_pc_skeletonized",
                ShortName: 'Cinnamoroll ST2'
            },
            parentId: "55818a684bdc2ddd698b456d",
            newId: "CinnamorollST2",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f761f86f774094242f1a1",
            locales: {
                "en": {
                    name: "AR-15 F1 Firearms Skeletonized Style 2 PC pistol grip (Cinnamoroll)",
                    shortName: "Cinnamoroll F1 St2 PC",
                    description: "A lightweight ergonomical pistol grip with finger grooves for AR-15 weapon systems, manufactured by F1 Firearms. Wrapped with paracord for maximum comfort and minimum hand slip. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollST2);
        this.logger.log("CinnamorollST2 added to the database.", "bold cyan");

        const cinnamorollGenM3: NewItemFromCloneDetails = {
            itemTplToClone: "55802d5f4bdc2dac148b458e",
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
            newId: "cinnamorollGenM3",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f754a86f774094242f19b",
            locales: {
                "en": {
                    name: "5.56x45 Magpul PMAG 30 GEN M3 W STANAG 30-round magazine (Cinnamoroll)",
                    shortName: "Cinnamoroll GEN M3",
                    description: "A 30-round 5.56x45 Magpul PMAG GEN M3 30 polymer magazine with an observation slot for faster capacity checking. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollGenM3);
        this.logger.log("cinnamorollGenM3 added to the database.", "bold cyan");

        const cinnamorollURX38: NewItemFromCloneDetails = {
            itemTplToClone: "5d123102d7ad1a004e475fe5",
            overrideProperties: {
                Description: 'cinnamoroll_handguard_ar15_kac_urx_3_8_inch',
                Prefab: {
                    "path": "cinnamoroll/handguard_ar15_kac_urx_3_8_inch_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_handguard_ar15_kac_urx_3_8_inch",
                ShortName: 'Cinnamoroll URX 3.8'
            },
            parentId: "55818a104bdc2db9688b4569",
            newId: "cinnamorollURX38",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f75e486f77447ec5d7712",
            locales: {
                "en": {
                    name: "AR-15 KAC URX 3 8 inch handguard (Cinnamoroll)",
                    shortName: "Cinnamoroll URX3 8",
                    description: "The Knight's Armament URX 3 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollURX38);
        this.logger.log("cinnamorollURX38 added to the database.", "bold cyan");

        const cinnamorollURX1075: NewItemFromCloneDetails = {
            itemTplToClone: "5d122e7bd7ad1a07102d6d7f",
            overrideProperties: {
                Description: 'cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch',
                Prefab: {
                    "path": "cinnamoroll/handguard_ar15_kac_urx_31_10,75_inch_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch",
                ShortName: 'Cinnamoroll URX 10.75'
            },
            parentId: "55818a104bdc2db9688b4569",
            newId: "cinnamorollURX1075",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f75e486f77447ec5d7712",
            locales: {
                "en": {
                    name: "AR-15 KAC URX 3.1 10.75 inch handguard (Cinnamoroll)",
                    shortName: "URX3.1 10.75",
                    description: "The Knight's Armament URX 3.1 handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollURX1075);
        this.logger.log("cinnamorollURX1075 added to the database.", "bold cyan");

        const cinnamorollAvalanche: NewItemFromCloneDetails = {
            itemTplToClone: "5f633ff5c444ce7e3c30a006",
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
            newId: "cinnamorollAvalanche",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f751486f77447ec5d770c",
            locales: {
                "en": {
                    name: "AR-15 Rainier Arms Avalanche MOD2 charging handle (Cinnamoroll)",
                    shortName: "Avalanche",
                    description: "The Avalanche MOD2 charging handle for AR-15 and compatible systems. Manufactured by Rainier Arms. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollAvalanche);
        this.logger.log("cinnamorollAvalanche added to the database.", "bold cyan");

        const cinnamorollForegripBcm: NewItemFromCloneDetails = {
            itemTplToClone: "5c7fc87d2e221644f31c0298",
            overrideProperties: {
                Description: 'cinnamoroll_foregrip_all_bcm_mod_3',
                Prefab: {
                    "path": "cinnamoroll/foregrip_all_bcm_mod_3_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_foregrip_all_bcm_mod_3",
                ShortName: 'Cinnamoroll BCM foregrip'
            },
            parentId: "55818af64bdc2d5b648b4570",
            newId: "cinnamorollForegripBcm",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f71de86f774093f2ecf13",
            locales: {
                "en": {
                    name: "BCM GUNFIGHTER MOD 3 vertical foregrip (Cinnamoroll)",
                    shortName: "GF MOD3",
                    description: "A lightweight polymer tactical grip manufactured by BCM. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollForegripBcm);
        this.logger.log("cinnamorollForegripBcm added to the database.", "bold cyan");

        const cinnamorollMk12Low: NewItemFromCloneDetails = {
            itemTplToClone: "56eabcd4d2720b66698b4574",
            overrideProperties: {
                Description: 'cinnamoroll_gas_block_ar15_dd_mk12_low_profile',
                Prefab: {
                    "path": "cinnamoroll/gas_block_ar15_dd_mk12_low_profile_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_gas_block_ar15_dd_mk12_low_profile",
                ShortName: 'Cinnamoroll Mk12 Low Gas Block'
            },
            parentId: "56ea9461d2720b67698b456f",
            newId: "cinnamorollMk12Low",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f760586f774093e6cb509",
            locales: {
                "en": {
                    name: "AR-15 Daniel Defense MK12 Low Profile Gas Block (Cinnamoroll)",
                    shortName: "MK12",
                    description: "A gas block for MK12 Special Purpose Rifle, can also be installed on most AR-15 system barrels. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollMk12Low);
        this.logger.log("cinnamorollMk12Low added to the database.", "bold cyan");

        const cinnamorollKacPanelShort: NewItemFromCloneDetails = {
            itemTplToClone: "5d123a3cd7ad1a004e476058",
            overrideProperties: {
                Description: 'cinnamoroll_tactical_urx_kac_panel_short',
                Prefab: {
                    "path": "cinnamoroll/tactical_urx_kac_panel_short_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_tactical_urx_kac_panel_short",
                ShortName: 'Cinnamoroll URX KAC Short Panel'
            },
            parentId: "5a74651486f7744e73386dd1",
            newId: "cinnamorollKacPanelShort",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 42500,
            handbookParentId: "5b5f74cc86f77447ec5d770a",
            locales: {
                "en": {
                    name: "KAC URX 3/3.1 short panel (Cinnamoroll)",
                    shortName: "URX short",
                    description: "A short rail cover for the URX 3/3.1 handguards, manufactured by Knight's Armament Company. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollKacPanelShort);
        this.logger.log("cinnamorollKacPanelShort added to the database.", "bold cyan");

        const cinnamorollURX38Lower: NewItemFromCloneDetails = {
            itemTplToClone: "637f57d2f5ef8c33840d36c4",
            overrideProperties: {
                Description: 'cinnamoroll_handguard_ar15_kac_urx_3_8_inch_lower',
                Prefab: {
                    "path": "cinnamoroll/handguard_ar15_kac_urx_3_8_inch_lower_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_handguard_ar15_kac_urx_3_8_inch_lower",
                ShortName: 'Cinnamoroll KAC URX 3.8 Lower'
            },
            parentId: "55818a104bdc2db9688b4569",
            newId: "cinnamorollURX38Lower",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 5010,
            handbookParentId: "5b5f75e486f77447ec5d7712",
            locales: {
                "en": {
                    name: "AR-15 KAC URX 3 8 inch lower handguard (Cinnamoroll)",
                    shortName: "URX3 8",
                    description: "The Knight's Armament URX 3 lower handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollURX38Lower);
        this.logger.log("cinnamorollURX38Lower added to the database.", "bold cyan");

        const cinnamorollURX1075Lower: NewItemFromCloneDetails = {
            itemTplToClone: "637f57c532b66e7e320a6676",
            overrideProperties: {
                Description: 'cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch_lower',
                Prefab: {
                    "path": "cinnamoroll/handguard_ar15_kac_urx_31_10,75_inch_lower_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_handguard_ar15_kac_urx_31_10,75_inch_lower",
                ShortName: 'Cinnamoroll KAC URX 10.75 Lower'
            },
            parentId: "55818a104bdc2db9688b4569",
            newId: "cinnamorollURX1075Lower",
            fleaPriceRoubles: 50000,
            handbookPriceRoubles: 5640,
            handbookParentId: "5b5f75e486f77447ec5d7712",
            locales: {
                "en": {
                    name: "AR-15 KAC URX 3.1 10.75 inch lower handguard (Cinnamoroll)",
                    shortName: "URX3.1 10.75",
                    description: "The Knight's Armament URX 3.1 lower handguard for AR-15 equipped with a unique interface for installation of additional devices and accessories. Manufactured by Sanrio."
                }
            }
        }
        CustomItem.createItemFromClone(cinnamorollURX1075Lower);
        this.logger.log("cinnamorollURX1075Lower added to the database.", "bold cyan");
    }
}

module.exports = { mod: new Mod() }

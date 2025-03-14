import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { ItemTpl } from "@spt/models/enums/ItemTpl";
import { ILogger } from "@spt/models/spt/utils/ILogger";


class Sanrio implements IPostDBLoadMod, IPostSptLoadMod
{
    private logger: ILogger

    public postDBLoad(container: DependencyContainer): void 
    {
        this.logger = container.resolve<ILogger>("WinstonLogger");
        this.AddItems(container);
    }

    public postSptLoad(container: DependencyContainer): void {
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const item = db.getTables().templates.items;

        // ADD HEADSETS
        item[ItemTpl.INVENTORY_DEFAULT]._props.Slots[11]._props.filters[0].Filter.push("67cd00e98bcac3596782fb08");

        // ADD VUDU TO SCOPE MOUNTS
        let mounts: Record<string, any>[] = [
            item[ItemTpl.MOUNT_BURRIS_ARPEPR_30MM_RING_SCOPE],
            item[ItemTpl.MOUNT_GEISSELE_SUPER_PRECISION_30MM_RING_SCOPE],
            item[ItemTpl.MOUNT_GEISSELE_SUPER_PRECISION_30MM_RING_SCOPE_MOUNT_DDC],
            item[ItemTpl.MOUNT_JP_ENTERPRISES_FLATTOP_30MM_RING_SCOPE],
            item[ItemTpl.MOUNT_LOBAEV_ARMS_30MM_SCOPE],
            item[ItemTpl.MOUNT_M700_30MM_INTEGRAL_RING_SCOPE],
            item[ItemTpl.MOUNT_NIGHTFORCE_MAGMOUNT_30MM_RING_SCOPE],
            item[ItemTpl.MOUNT_RECKNAGEL_ERATAC_30MM_RING_SCOPE],
            item[ItemTpl.MOUNT_SIG_ALPHA4_30MM_RING_SCOPE]
        ];

        mounts.forEach((mount) => {
            mount._props.Slots[0]._props.filters[0].Filter.push("67cb5a0a15f5a376aa74b1c7");
        });

        // ADD EMOD TO BUFFER TUBE
        const tubes: Record<string, any>[] = [
            item[ItemTpl.STOCK_AK12_BUFFER_TUBE],
            item[ItemTpl.STOCK_AK545_BUFFER_TUBE],
            item[ItemTpl.STOCK_AK74M_CAA_AKTS_AK74_BUFFER_TUBE],
            item[ItemTpl.STOCK_AKMAK74_CAA_AKTS_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_ADAR_215_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_COLT_CARBINE_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_RTM_ATP_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_SOYUZTM_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_STRIKE_INDUSTRIES_ADVANCED_RECEIVER_EXTENSION_BUFFER_TUBE],
            item[ItemTpl.STOCK_AR15_STRIKE_INDUSTRIES_ADVANCED_RECEIVER_EXTENSION_BUFFER_TUBE_ANODIZED_RED],
            item[ItemTpl.STOCK_CMMG_BUFFER_TUBE],
            item[ItemTpl.STOCK_FAB_DEFENSE_BUFFER_TUBE_FOR_AGR870],
            item[ItemTpl.STOCK_FN_SCAR_VLTOR_RESCAR_STOCK_ADAPTER],
            item[ItemTpl.STOCK_FN_SCAR_VLTOR_RESCAR_STOCK_ADAPTER_PATRIOT_BROWN],
            item[ItemTpl.STOCK_HK_ENHANCED_TUBE_BUFFER_TUBE],
            item[ItemTpl.STOCK_HK_G36_TOMMY_BUILT_AR_STOCK_ADAPTER],
            item[ItemTpl.STOCK_M870_MESA_TACTICAL_LEO_STOCK_ADAPTER],
            item[ItemTpl.STOCK_MESA_TACTICAL_CROSSHAIR_HYDRAULIC_BUFFER_TUBE],
            item[ItemTpl.STOCK_RPK16_BUFFER_TUBE],
            item[ItemTpl.STOCK_SKS_TAPCO_INTRAFUSE_BUFFER_TUBE],
            item[ItemTpl.PISTOLGRIP_AS_VAL_ROTOR_43_PISTOL_GRIP_WITH_BUFFER_TUBE]
        ];

        tubes.forEach((tube) => {
            tube._props.Slots[0]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e76");
        });

        // ADD HIGH SPACER TO MOUNTS
        mounts = [
            item[ItemTpl.MOUNT_AIMPOINT_MICRO_H2_STANDARD],
            item[ItemTpl.MOUNT_AIMPOINT_MICRO_STANDARD],
            item[ItemTpl.MOUNT_GBRS_AIMPOINT_HYDRA_MOUNT_KIT_BLACK],
            item[ItemTpl.MOUNT_GBRS_AIMPOINT_HYDRA_MOUNT_KIT_FDE]
        ];

        mounts.forEach((mount) => {
            mount._props.Slots[0]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e77")
        });

        // ADD MAGAZINE TO GUNS
        let guns: Record<string, any>[] = [
            item[ItemTpl.ASSAULTRIFLE_ADAR_215_556X45_CARBINE],
            item[ItemTpl.ASSAULTRIFLE_LONE_STAR_TX15_DML_556X45_CARBINE],
            item[ItemTpl.ASSAULTRIFLE_COLT_M4A1_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_DESERT_TECH_MDR_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_FN_SCARL_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_FN_SCARL_556X45_ASSAULT_RIFLE_FDE],
            item[ItemTpl.ASSAULTRIFLE_HK_416A5_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_HK_G36_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_SIG_MCX_300_BLACKOUT_ASSAULT_RIFLE]
        ]

        guns.forEach((gun) => {
            gun._props.Slots[1]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e7c");
        });

        // ADD CHARGE HANDLE TO GUNS
        guns = [
            item[ItemTpl.ASSAULTRIFLE_ADAR_215_556X45_CARBINE],
            item[ItemTpl.ASSAULTRIFLE_LONE_STAR_TX15_DML_556X45_CARBINE],
            item[ItemTpl.ASSAULTRIFLE_COLT_M4A1_556X45_ASSAULT_RIFLE],
            item[ItemTpl.ASSAULTRIFLE_HK_416A5_556X45_ASSAULT_RIFLE],
            item[ItemTpl.SMG_SOYUZTM_STM9_GEN2_9X19_CARBINE]
        ];
        
        guns.forEach((gun) => {
            gun._props.Slots[4]._props.filters[0].Filter.push("67ca3e89ccde2501bbf91e7f");
        });
    }

    public AddItems(container: DependencyContainer) {
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        const blackResponder: NewItemFromCloneDetails = {
            itemTplToClone: "5e9dcb9c86f7743e20652f25",
            overrideProperties: {
                Description: 'cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24',
                Prefab: {
                    "path": "cinnamoroll/scope_30mm_razor_hd_gen_2_1_6x24_cinnamoroll.bundle",
                    "rcid": ""
                },
                Name: "cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24",
                ShortName: 'cinnamoroll_scope_30mm_razor_hd_gen_2_1_6x24'
            },
            parentId: "5cd944ca1388ce03a44dc2a4",
            newId: "67cd54b0a0b34433d6b4ef0c"
        }
        CustomItem.createItemFromClone(blackResponder);
        this.logger.log("BlackResponder added to the database.", "bold cyan");

        const cinnamorollRazor: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.OPTICSCOPE_VORTEX_RAZOR_HD_GEN2_16X24_30MM_RIFLESCOPE,
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
        }
        CustomItem.createItemFromClone(cinnamorollRazor);
        this.logger.log("CinnamorollRazor added to the database.", "bold cyan");

        const comtacSixBlack: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.HEADPHONES_PELTOR_COMTAC_VI_HEADSET_COYOTE_BROWN,
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
        }
        CustomItem.createItemFromClone(comtacSixBlack);
        this.logger.log("ComtacSixBlack added to the database.", "bold cyan");

        const cinnamorollVltor: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.STOCK_AR15_VLTOR_EMOD,
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
        }
        CustomItem.createItemFromClone(cinnamorollVltor);
        this.logger.log("CinnamorollVltor added to the database.", "bold cyan");

        const cinnamorollGenM3: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.MAGAZINE_556X45_GEN_M3_WINDOW_30RND,
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
        }
        CustomItem.createItemFromClone(cinnamorollGenM3);
        this.logger.log("cinnamorollGenM3 added to the database.", "bold cyan");

        const cinnamorollAvalanche: NewItemFromCloneDetails = {
            itemTplToClone: ItemTpl.CHARGE_AR15_RAINIER_ARMS_AVALANCHE_MOD2_CHARGING_HANDLE,
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
        }
        CustomItem.createItemFromClone(cinnamorollAvalanche);
        this.logger.log("cinnamorollAvalanche added to the database.", "bold cyan");
    }
}

export const mod = new Sanrio();
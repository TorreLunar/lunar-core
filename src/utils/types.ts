import {
  ITEM_CATEGORY_WEAPON,
  ITEM_TYPE,
  MOB_JOB,
  ITEM_SLOT_NAME,
} from "@/constants";
import { BaseItemArmorStat } from "@/structure/stats/BaseItemArmorStat";
import { BaseItemWeaponStat } from "@/structure/stats/BaseItemWeaponStat";

// ITEM
export type TypeItemCategory = keyof typeof ITEM_CATEGORY_WEAPON;
export type TypeItemType = keyof typeof ITEM_TYPE;

// MOB
export type TypeMobJob = keyof typeof MOB_JOB;

// EQUIPMENT
export type TypeItemSlotName = keyof typeof ITEM_SLOT_NAME;

export type TypeItemStats = BaseItemWeaponStat | BaseItemArmorStat;

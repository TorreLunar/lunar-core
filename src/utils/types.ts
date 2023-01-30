import {
  WEAPON_ITEM_CATEGORY,
  ITEM_TYPE,
  MOB_JOB,
  ITEM_SLOT_NAME,
  ITEM_RARITY_TYPE,
  ARMOR_ITEM_CATEGORY,
  CONSUMABLE_ITEM_CATEGORY,
} from "@/utils/constants";
import { BaseItemArmorStat } from "@/structure/stats/BaseItemArmorStat";
import { BaseItemWeaponStat } from "@/structure/stats/BaseItemWeaponStat";
import { BaseItemConsumableEffect } from "@/structure/effects/BaseItemConsumable";
import { BaseEquipmentPlayer } from "@/structure/BaseEquipmentPlayer";
import { Player } from "@/entities/Player";
import { Mob } from "@/entities/Mob";

// ITEM
export type TypeWeaponItemCategory = keyof typeof WEAPON_ITEM_CATEGORY;
export type TypeArmorItemCategory = keyof typeof ARMOR_ITEM_CATEGORY;
export type TypeConsumableCategory = keyof typeof CONSUMABLE_ITEM_CATEGORY;

export type TypeItemStats =
  | BaseItemWeaponStat
  | BaseItemArmorStat
  | BaseItemConsumableEffect;

export type TypeItemCategory =
  | TypeWeaponItemCategory
  | TypeArmorItemCategory
  | TypeConsumableCategory;

export type TypeItemType = keyof typeof ITEM_TYPE;
export type TypeItemRarity = keyof typeof ITEM_RARITY_TYPE;

// MOB
export type TypeMobJob = keyof typeof MOB_JOB;

// EQUIPMENT
export type TypeItemSlotName = keyof typeof ITEM_SLOT_NAME;

export type TypeEquipmentMob = BaseEquipmentPlayer;

// Entities

export type TypeEntities = Player | Mob;

// Utils

export type Turn = number;

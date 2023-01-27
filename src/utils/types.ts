import {
  ITEM_CATEGORY_WEAPON,
  ITEM_TYPE,
  MOB_CLASSES,
  ITEM_SLOT_NAME,
} from "@/constants";

// ITEM
export type TypeItemCategory = keyof typeof ITEM_CATEGORY_WEAPON;
export type TypeItemType = keyof typeof ITEM_TYPE;

// MOB
export type TypeMobClasses = keyof typeof MOB_CLASSES;

// EQUIPMENT
export type TypeItemSlotName = keyof typeof ITEM_SLOT_NAME;

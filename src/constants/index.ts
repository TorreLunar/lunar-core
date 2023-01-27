export const MOB_CLASSES = ["mage", "warrior", "hunter"] as const;

export const ITEM_SLOT_NAME = ["LEFT_HAND", "RIGHT_HAND", "HEAD"] as const;

export const ITEM_TYPE = ["Weapon", "Armor", "Consumable"] as const;

export const ITEM_CATEGORY_WEAPON_SWORDS = [
  "Short Sword",
  "Long Sword",
  "Great Sword",
] as const;

export const ITEM_CATEGORY_WEAPON_STAFFS = [
  "Fire Staff",
  "Ice Staff",
  "Lightning Staff",
] as const;

export const ITEM_CATEGORY_WEAPON_MAGIC_SWORDS = [
  "Fire Sword",
  "Ice Sword",
  "Lightning Sword",
  "Poisonous Sword",
] as const;

export const ITEM_CATEGORY = [
  ...ITEM_CATEGORY_WEAPON_SWORDS,
  ...ITEM_CATEGORY_WEAPON_MAGIC_SWORDS,
  ...ITEM_CATEGORY_WEAPON_STAFFS,
] as const;

import {
  TypeItemCategory,
  TypeItemStats,
  TypeItemRarity,
  ITEM_TYPE,
  TypeConsumableCategory,
} from "@/utils";
import { BaseItemConsumableEffect } from "./effects/BaseItemConsumable";

export interface BaseItemProps<Stats, Type> {
  name: string;
  description?: string;
  category: Type;
  type: ITEM_TYPE;
  price: number;
  drop_rate: number;
  rarity: TypeItemRarity;

  stats: Stats;
}

export class BaseItem<
  Stats extends TypeItemStats,
  Category extends TypeItemCategory
> implements BaseItemProps<Stats, Category>
{
  readonly name: string;
  readonly description?: string;
  readonly category: Category;
  readonly type: ITEM_TYPE;
  readonly price: number;
  readonly drop_rate: number;
  readonly rarity: TypeItemRarity;

  readonly stats: Stats;

  constructor(props: BaseItemProps<Stats, Category>) {
    Object.assign(this, props);
    Object.freeze(this);
  }

  isConsumable(): this is BaseItem<
    BaseItemConsumableEffect,
    TypeConsumableCategory
  > {
    return this.type === ITEM_TYPE.CONSUMABLE;
  }
}

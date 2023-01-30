import { ITEM_TYPE, TypeConsumableCategory } from "@/utils";
import { BaseItem, BaseItemProps } from "@/structure";
import { BaseItemConsumableEffect } from "@/structure/effects/BaseItemConsumable";

export type ConsumableManagerItemProps = Omit<
  BaseItemProps<BaseItemConsumableEffect, TypeConsumableCategory>,
  "type"
>;

export class ConsumableManagerItem extends BaseItem<
  BaseItemConsumableEffect,
  TypeConsumableCategory
> {
  constructor(props: ConsumableManagerItemProps) {
    super({ type: ITEM_TYPE.CONSUMABLE, ...props });
  }
}

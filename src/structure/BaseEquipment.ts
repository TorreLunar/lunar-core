import { TypeConsumableCategory, TypeItemSlotName } from "@/utils";
import { BaseItem } from "./BaseItem";
import { BaseItemConsumableEffect } from "./effects/BaseItemConsumable";

export type BaseEquipmentProps = {
  inventory: BaseItem<any, any>[];
  bag: BaseItem<BaseItemConsumableEffect, TypeConsumableCategory>[];
  equipped: Map<TypeItemSlotName, BaseItem<any, any>>;
};

export type BaseEquipmentDataProps = BaseEquipmentProps & {};

export class BaseEquipment implements BaseEquipmentProps {
  readonly inventory: BaseItem<any, any>[];
  readonly bag: BaseItem<BaseItemConsumableEffect, TypeConsumableCategory>[];
  readonly equipped: Map<TypeItemSlotName, BaseItem<any, any>>;

  constructor(props: BaseEquipmentProps) {
    this.inventory = props.inventory;
    this.bag = props.bag;
    this.equipped = props.equipped;

    Object.freeze(this);
  }

  findItemInventory(name: string): BaseItem<any, any> | undefined {
    return this.inventory.find((item) => item.name == name);
  }

  findItemBag(name: string): BaseItem<any, any> | undefined {
    return this.bag.find((item) => item.name == name);
  }
}

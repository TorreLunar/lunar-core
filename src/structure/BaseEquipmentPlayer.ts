import { TypeConsumableCategory, TypeItemSlotName } from "@/utils";
import { BaseEquipment } from "./BaseEquipment";
import { BaseItem } from "./BaseItem";
import { BaseItemConsumableEffect } from "./effects/BaseItemConsumable";

export type BaseEquipmentPlayerProps = {
  inventory: BaseItem<any, any>[];
  bag: BaseItem<BaseItemConsumableEffect, TypeConsumableCategory>[];
  equipped: Map<TypeItemSlotName, BaseItem<any, any>>;
};

export type BaseEquipmentDataProps = BaseEquipmentPlayerProps & {};

export class BaseEquipmentPlayer
  extends BaseEquipment
  implements BaseEquipmentPlayerProps
{
  constructor(data: BaseEquipmentPlayerProps) {
    super(data);
  }

  addInventory(item: BaseItem<any, any>) {
    this.inventory.push(item);
  }

  addBag(name: string) {
    const item = this.getItemInventory(name);

    if (!item)
      return console.error("you don't have this item in your inventory");

    if (!item.isConsumable()) {
      this.addInventory(item);
      return console.error(
        `the item must be a consumable, but it's ${item.category}`
      );
    }

    this.bag.push(item);
  }

  private getItemInventory(name: string): BaseItem<any, any> | undefined {
    const index = this.inventory.findIndex((item) => item.name == name);
    if (index == -1) return undefined;
    return this.inventory.splice(index, 1).pop();
  }
}

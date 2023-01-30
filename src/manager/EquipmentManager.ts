import { BaseEquipmentPlayer } from "@/structure/BaseEquipmentPlayer";

import { BaseEquipment, BaseEquipmentProps } from "@/structure/BaseEquipment";

export class EquipmentManager extends BaseEquipment {
  constructor(data: BaseEquipmentProps) {
    super(data);
  }

  isEquipmentPlayer(): this is BaseEquipmentPlayer {
    return "addInventory" in this;
  }
}

Object.setPrototypeOf(
  EquipmentManager.prototype,
  BaseEquipmentPlayer.prototype
);

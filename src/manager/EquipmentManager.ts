import { BaseEquipmentMob } from "@/structure/equipment/BaseEquipmentMob";
import { BaseEquipmentPlayer } from "@/structure/equipment/BaseEquipmentPlayer";

export class EquipmentManager {
  constructor(data: any) {
    Object.assign(this, data);
  }

  isEquipmentPlayer(): this is BaseEquipmentPlayer {
    return "inventory" in this;
  }

  isEquipmentMob(): this is BaseEquipmentMob {
    return !("inventory" in this);
  }
}

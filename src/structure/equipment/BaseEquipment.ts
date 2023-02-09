import { TypeArmorItemCategory, TypeWeaponItemCategory } from "@/utils";
import { BaseItem } from "../BaseItem";
import { BaseItemArmorStat } from "../stats/BaseItemArmorStat";
import { BaseItemWeaponStat } from "../stats/BaseItemWeaponStat";

export interface EquippedProps {
  right_hand: BaseItem<BaseItemWeaponStat, TypeWeaponItemCategory>;
  armor: BaseItem<BaseItemArmorStat, TypeArmorItemCategory>;
}

export interface BaseEquipmentProps {
  equipped: EquippedProps;
}

export class BaseEquipment implements BaseEquipmentProps {
  equipped: EquippedProps;
  constructor(data: BaseEquipmentProps) {
    this.equipped = data.equipped;
  }
}

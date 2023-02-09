import { BaseEquipment, BaseEquipmentProps } from "./BaseEquipment";

export interface BaseEquipmentMobProps extends BaseEquipmentProps {}

export class BaseEquipmentMob extends BaseEquipment {
  constructor(data: BaseEquipmentProps) {
    super(data);
  }
}

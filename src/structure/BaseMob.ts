import { TypeMobClasses } from "@/utils";
import { BaseAttributes } from "./BaseAttribute";
import { BaseEquipment } from "./BaseEquipment";
export interface MobBasedProps {
  name: string;
  level: number;
  class: TypeMobClasses;
  attributes: BaseAttributes;
  equipment: BaseEquipment;
}

export type MobBasedDataProps = MobBasedProps & {};

export class MobBased implements Readonly<MobBasedProps> {
  name: string;

  level: number;
  class: TypeMobClasses;

  attributes: BaseAttributes;
  equipment: BaseEquipment;

  constructor(data: MobBasedProps) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  static create(data: MobBasedDataProps): MobBased {
    return new MobBased(data);
  }
}

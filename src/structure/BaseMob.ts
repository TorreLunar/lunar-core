import { TypeMobJob } from "@/utils";
import { BaseAttributes } from "./BaseAttribute";
import { BaseEquipment } from "./BaseEquipment";
export interface BaseMobProps {
  name: string;
  level: number;
  job: TypeMobJob;
  attributes: BaseAttributes;
  equipment: BaseEquipment;
}

export type BaseMobDataProps = BaseMobProps & {};

export class BaseMob implements Readonly<BaseMobProps> {
  name: string;

  level: number;
  job: TypeMobJob;

  attributes: BaseAttributes;
  equipment: BaseEquipment;

  constructor(data: BaseMobProps) {
    Object.assign(this, data);
    Object.freeze(this);
  }

  static create(data: BaseMobDataProps): BaseMob {
    return new BaseMob(data);
  }
}

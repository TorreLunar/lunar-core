import { Attributes, IAttributesPropsCreate } from "./attributes";
import { Equipment, IEquipmentPropsCreate } from "./equipment";

export interface IMobProps {
  readonly name: string;
  readonly isPlayer: boolean;
  readonly level: number;
  readonly attributes: Attributes;
  readonly equipment: Equipment;
}

export interface IMobPropsCreate
  extends Omit<IMobProps, "attributes" | "equipment"> {
  readonly attributes: IAttributesPropsCreate;
  readonly equipment: IEquipmentPropsCreate;
}

export class Mob implements IMobProps {
  readonly name: string;
  readonly isPlayer: boolean;
  readonly level: number;
  readonly attributes: Attributes;
  readonly equipment: Equipment;

  constructor(props: IMobProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }
  static create(props: IMobPropsCreate): Mob {
    const attributes = Attributes.create(props.attributes);
    const equipment = Equipment.create(props.equipment);
    return new Mob({ ...props, attributes, equipment });
  }
}

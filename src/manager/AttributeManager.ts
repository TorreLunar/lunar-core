import { BaseAttributes, BaseAttributesProps } from "@/structure";
import { BaseMageAttribute } from "@/structure/attributes/BaseMageAttribute.ts";
import { BaseWarriorAttribute } from "@/structure/attributes/BaseWarriorAttributes";

export class AttributeManager implements BaseAttributes {
  health: number;
  wisdom: number;
  defense: number;
  strength: number;
  dexterity: number;
  constructor(data: BaseAttributesProps) {
    Object.assign(this, data);
  }

  static createMage(): BaseMageAttribute {
    return new BaseMageAttribute();
  }

  static createWarrior(): BaseWarriorAttribute {
    return new BaseWarriorAttribute();
  }
}

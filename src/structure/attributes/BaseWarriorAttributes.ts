import { BaseAttributes } from "../BaseAttribute";

export class BaseWarriorAttribute extends BaseAttributes {
  constructor() {
    super({
      dexterity: 10,
      strength: 14,
      defense: 12,
      wisdom: 8,
      health: 15,
    });
  }
}

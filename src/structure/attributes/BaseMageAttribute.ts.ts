import { BaseAttributes } from "../BaseAttribute";

export class BaseMageAttribute extends BaseAttributes {
  constructor() {
    super({
      dexterity: 8,
      strength: 10,
      defense: 12,
      wisdom: 15,
      health: 14,
    });
  }
}

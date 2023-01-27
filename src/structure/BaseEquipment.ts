import { ITEM_SLOT_NAME } from "@/constants";
import { BaseItem } from "./BaseItem";

export type BaseEquipmentProps = {
  inventory: BaseItem[];
  bag: BaseItem[];
  equipped: Map<(typeof ITEM_SLOT_NAME)[number], BaseItem>;
};

export type BaseEquipmentDataProps = BaseEquipmentProps & {};

export class BaseEquipment implements Readonly<BaseEquipmentProps> {
  inventory: BaseItem[];
  bag: BaseItem[];
  equipped: Map<(typeof ITEM_SLOT_NAME)[number], BaseItem>;

  constructor(props: BaseEquipmentProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }

  static create(data: BaseEquipmentDataProps): BaseEquipment {
    return new BaseEquipment(data);
  }
}

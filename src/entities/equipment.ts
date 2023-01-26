import { IEquipmentMapEquipped } from "@/constants/equipmentMap";
import { Item, ItemProps } from "./item";
export interface IEquipmentProps {
  inventory: Item[];
  equipped: Map<IEquipmentMapEquipped, Item>;
}

export interface IEquipmentPropsCreate
  extends Omit<IEquipmentProps, "equipped"> {
  inventory: ItemProps[];
  equipped: ItemProps[];
}

export class Equipment implements IEquipmentProps {
  inventory: Item[];
  equipped: Map<IEquipmentMapEquipped, Item>;
  constructor(props: IEquipmentProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }

  static create(props: IEquipmentPropsCreate): Equipment {
    const inventory = props.inventory.map((elem) => Item.create(elem));

    if (props.equipped.length > 0) throw new Error("equipped list is empty");

    const [Item1, Item2, Item3] = props.equipped.map((elem) =>
      Item.create(elem)
    );

    const equipped = new Map<IEquipmentMapEquipped, Item>();

    equipped.set("LEFT", Item1);
    equipped.set("RIGHT", Item2);
    equipped.set("HEAD", Item3);

    return new Equipment({
      inventory,
      equipped,
    });
  }
}

import { ITEM_TYPE, TypeArmorItemCategory } from "@/utils";
import { BaseItem, BaseItemProps } from "@/structure";
import { BaseItemArmorStat } from "@/structure/stats/BaseItemArmorStat";

export type ArmorManagerItemProps = Omit<
  BaseItemProps<BaseItemArmorStat, TypeArmorItemCategory>,
  "type"
>;

export class ArmorManagerItem extends BaseItem<
  BaseItemArmorStat,
  TypeArmorItemCategory
> {
  constructor(props: ArmorManagerItemProps) {
    super({ type: ITEM_TYPE.ARMOR, ...props });
  }
}

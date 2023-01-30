import { ITEM_TYPE, TypeWeaponItemCategory } from "@/utils";
import { BaseItem, BaseItemProps } from "@/structure";
import { BaseItemWeaponStat } from "@/structure/stats/BaseItemWeaponStat";

export type WeaponManagerItemProps = Omit<
  BaseItemProps<BaseItemWeaponStat, TypeWeaponItemCategory>,
  "type"
>;

export class WeaponManagerItem extends BaseItem<
  BaseItemWeaponStat,
  TypeWeaponItemCategory
> {
  constructor(props: WeaponManagerItemProps) {
    super({ type: ITEM_TYPE.WEAPON, ...props });
  }
}

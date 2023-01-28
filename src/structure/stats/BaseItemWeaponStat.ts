import { ITEM_TYPE } from "@/constants";

export interface BaseItemWeaponStatProps {
  type: ITEM_TYPE.WEAPON;
  damage: number;
  critical_chance: number;
  critical_damage: number;
}

export type BaseItemWeaponStatDataProps = Omit<
  BaseItemWeaponStatProps,
  "type"
> & {};

export class BaseItemWeaponStat implements Readonly<BaseItemWeaponStatProps> {
  readonly type: ITEM_TYPE.WEAPON;
  readonly damage: number;
  readonly critical_chance: number;
  readonly critical_damage: number;

  constructor(props: Omit<BaseItemWeaponStatDataProps, "type">) {
    this.type = ITEM_TYPE.WEAPON;
    this.damage = props.damage;
    this.critical_chance = props.critical_chance;
    this.critical_damage = props.critical_damage;

    Object.freeze(this);
  }

  static create(data: BaseItemWeaponStatDataProps): BaseItemWeaponStat {
    return new BaseItemWeaponStat(data);
  }
}

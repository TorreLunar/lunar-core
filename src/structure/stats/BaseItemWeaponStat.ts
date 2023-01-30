export interface BaseItemWeaponStatProps {
  damage: number;
  critical_chance: number;
  critical_damage: number;
}

export type BaseItemWeaponStatDataProps = BaseItemWeaponStatProps & {};

export class BaseItemWeaponStat implements Readonly<BaseItemWeaponStatProps> {
  readonly damage: number;
  readonly critical_chance: number;
  readonly critical_damage: number;

  constructor(props: BaseItemWeaponStatDataProps) {
    this.damage = props.damage;
    this.critical_chance = props.critical_chance;
    this.critical_damage = props.critical_damage;

    Object.freeze(this);
  }
}

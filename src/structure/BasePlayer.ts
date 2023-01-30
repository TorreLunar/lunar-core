import { BaseEntity, BaseEntityProps } from "./BaseEntity";
import { BaseEquipmentPlayer } from "./BaseEquipmentPlayer";

export type BasePlayerProps = BaseEntityProps<BaseEquipmentPlayer> & {
  nation: string;
  skill_points: number;
};

export class BasePlayer extends BaseEntity<BaseEquipmentPlayer> {
  readonly nation: string;
  readonly skill_points: number;
  constructor(data: BasePlayerProps) {
    super(data);
    this.nation = data.nation;
    this.skill_points = data.skill_points;
    this._patch();
  }
  private _patch() {
    if (!this.nation) return console.error("nation is invalid");

    if (typeof this.skill_points !== "number")
      return console.log("skill_points is invalid");
  }
}

Object.setPrototypeOf(BasePlayer.prototype, BaseEquipmentPlayer.prototype);

import { BaseEntity, BaseEntityProps } from "./BaseEntity";
import { BaseEquipmentPlayer } from "./equipment/BaseEquipmentPlayer";

export type BasePlayerProps = BaseEntityProps<BaseEquipmentPlayer> & {
  nation: string;
  skill_points: number;
};

export class BasePlayer
  extends BaseEntity<BaseEquipmentPlayer>
  implements BasePlayerProps
{
  nation: string;
  skill_points: number;
  constructor(data: BasePlayerProps) {
    super(data);
  }
}

Object.setPrototypeOf(BasePlayer.prototype, BaseEquipmentPlayer.prototype);

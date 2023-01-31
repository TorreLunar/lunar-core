import { AttributeManager } from "@/manager";
import { BaseAttributes } from "@/structure";
import { BaseEquipmentPlayer } from "@/structure/BaseEquipmentPlayer";
import { BasePlayer, BasePlayerProps } from "@/structure/BasePlayer";
import { LEVEL_INITIAL_PLAYER, SKILL_POINTS_INITIAL_PLAYER } from "@/utils";

type BasePlayerPropsIgnore =
  | "attributes"
  | "equipment"
  | "skill_points"
  | "level";

interface PlayerCreate extends Omit<BasePlayerProps, BasePlayerPropsIgnore> {}

export class Player extends BasePlayer {
  equipment: BaseEquipmentPlayer;
  name: string;
  attributes: BaseAttributes;
  health_points: number;
  job: "MAGE" | "WARRIOR" | "HUNTER";
  level: number;
  skill_points: number;
  nation: string;

  constructor(data: BasePlayerProps) {
    super(data);
  }

  static create(props: PlayerCreate): Player {
    const { nation, name, health_points, job } = props;
    const skill_points = SKILL_POINTS_INITIAL_PLAYER;
    const level = LEVEL_INITIAL_PLAYER;
    let attributes;

    const equipment = new BaseEquipmentPlayer({
      inventory: [],
      bag: [],
      equipped: new Map(),
    });

    if (props.job === "MAGE") {
      attributes = AttributeManager.createMage();
    }

    if (props.job === "WARRIOR") {
      attributes = AttributeManager.createWarrior();
    }

    if (!attributes || !equipment) {
      throw new Error("attributes is invalid");
    }

    return new Player({
      attributes,
      equipment,
      nation,
      name,
      health_points,
      job,
      skill_points,
      level,
    });
  }
}

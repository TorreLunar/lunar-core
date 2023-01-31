import { Mob } from "@/entities/Mob";
import { Player } from "@/entities/Player";

export class EntityManager {
  constructor(data: any) {
    if (!data) throw new Error("[EntityManager]: data is invalid");
    Object.assign(this, data);
  }

  isPlayer(): this is Player {
    return "nation" in this;
  }
  isMob(): this is Mob {
    return "drops" in this;
  }
}

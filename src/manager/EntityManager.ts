import { Mob } from "@/entities/Mob";
import { Player } from "@/entities/Player";
import { BaseEntity } from "@/structure/BaseEntity";

export class EntityManager {
  constructor(data: any) {
    if (!data) throw new Error("[EntityManager]: data is invalid");
    BaseEntity._verify(data);

    Object.assign(this, data);
  }

  isPlayer(): this is Player {
    return "nation" in this;
  }
  isMob(): this is Mob {
    return "drops" in this;
  }

  toMob(): Mob | undefined {
    return new Mob(this as any);
  }
}

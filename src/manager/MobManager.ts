import { Mob } from "@/entities/Mob";
import { Player } from "@/entities/Player";

export interface MobManagerProps {
  name: string;
}

export class MobManager {
  constructor(data: any) {
    Object.assign(this, data);
  }

  isPlayer(): this is Player {
    return "nation" in this;
  }
  isMob(): this is Mob {
    return "drops" in this;
  }
}

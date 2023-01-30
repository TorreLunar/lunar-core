import { BasePlayer, BasePlayerProps } from "@/structure/BasePlayer";

export class Player extends BasePlayer {
  constructor(data: BasePlayerProps) {
    super(data);
  }
  static create(
    props: Omit<BasePlayerProps, "attributes" | "equipment">
  ): Player {
    return new Player(props);
  }
}

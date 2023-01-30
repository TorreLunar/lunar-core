import { Turn } from "@/utils";

export class BaseItemConsumableEffectProps {
  effect: number;
  duration: Turn;
}

export class BaseItemConsumableEffect implements BaseItemConsumableEffectProps {
  readonly effect: number;
  readonly duration: number;

  constructor(data: BaseItemConsumableEffectProps) {
    this.effect = data.effect;
    this.duration = data.duration;

    Object.freeze(this);
  }
}

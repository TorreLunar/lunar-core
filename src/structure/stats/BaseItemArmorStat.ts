import { ITEM_TYPE } from "@/constants";

export interface BaseItemArmorStatProps {
  type: ITEM_TYPE.ARMOR;
  protection: number;
}

export type BaseItemArmorStatDataProps = Omit<
  BaseItemArmorStatProps,
  "type"
> & {};

export class BaseItemArmorStat implements Readonly<BaseItemArmorStatProps> {
  readonly type: ITEM_TYPE.ARMOR;
  readonly protection: number;

  constructor(props: Omit<BaseItemArmorStatDataProps, "type">) {
    this.type = ITEM_TYPE.ARMOR;
    this.protection = props.protection;

    Object.freeze(this);
  }
}

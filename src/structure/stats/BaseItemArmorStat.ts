export interface BaseItemArmorStatProps {
  protection: number;
}

export type BaseItemArmorStatDataProps = BaseItemArmorStatProps & {};

export class BaseItemArmorStat implements Readonly<BaseItemArmorStatProps> {
  readonly protection: number;

  constructor(props: BaseItemArmorStatDataProps) {
    this.protection = props.protection;

    Object.freeze(this);
  }
}

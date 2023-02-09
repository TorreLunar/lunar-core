import { BaseEntity, BaseEntityProps } from "./BaseEntity";
import { BaseEquipment } from "./equipment/BaseEquipment";
import { BaseItem } from "./BaseItem";

export interface BaseMobProps extends BaseEntityProps<BaseEquipment> {
  description: string;
  drop_enable: boolean;
  drops: BaseItem<any, any>[];
}

export class BaseMob extends BaseEntity<BaseEquipment> implements BaseMobProps {
  description: string;
  drop_enable: boolean;
  drops: BaseItem<any, any>[];
  constructor(data: BaseMobProps) {
    super(data);
    this.description = data.description;
    this.drops = data.drops;
    this.drop_enable = data.drop_enable;
  }
}

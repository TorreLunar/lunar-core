import { TypeItemCategory, TypeItemType } from "@/utils";

export interface BaseItemProps {
  name: string;

  description: string;

  category: TypeItemCategory;

  type: TypeItemType;

  price: number;

  stats: any;
}

export type BaseItemDataProps = BaseItemProps & {};

export class BaseItem implements Readonly<BaseItemProps> {
  name: string;
  description: string;

  stats: any;

  category: TypeItemCategory;

  type: TypeItemType;

  price: number;
  constructor(props: BaseItemProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }
  static create(data: BaseItemDataProps): BaseItem {
    return new BaseItem(data);
  }
}

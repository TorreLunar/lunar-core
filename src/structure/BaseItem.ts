import { TypeItemCategory, TypeItemType, TypeItemStats } from "@/utils";

export interface BaseItemProps<T> {
  name: string;
  description?: string;
  category: TypeItemCategory;
  type: TypeItemType;
  price: number;

  stats: T;
}

export class BaseItem<Stats> implements BaseItemProps<Stats> {
  readonly name: string;
  readonly description?: string;
  readonly stats: Stats;
  readonly category: TypeItemCategory;
  readonly type: TypeItemType;
  readonly price: number;

  constructor(props: BaseItemProps<Stats>) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

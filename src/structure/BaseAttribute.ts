import { Writable } from "@/utils";

export interface BaseAttributesProps {
  readonly health: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly strength: number;
}

export type BaseAttributesDataProps = Writable<BaseAttributesProps> & {};

export class BaseAttributes implements BaseAttributesProps {
  readonly health: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly strength: number;
  constructor(props: BaseAttributesProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }
  static create(data: BaseAttributesDataProps): BaseAttributes {
    return new BaseAttributes(data);
  }
}

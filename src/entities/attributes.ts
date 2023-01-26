export interface IAttributesProps {
  readonly health: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly strength: number;
}

export type IAttributesPropsCreate = IAttributesProps & {};

export class Attributes implements IAttributesProps {
  readonly health: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly strength: number;
  constructor(props: IAttributesProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }

  static create(props: IAttributesPropsCreate): Attributes {
    return new Attributes(props);
  }
}

export interface BaseAttributesProps {
  health: number;
  defense: number;
  dexterity: number;
  strength: number;
}

export class BaseAttributes implements BaseAttributesProps {
  readonly health: number;
  readonly defense: number;
  readonly dexterity: number;
  readonly strength: number;
  constructor(props: BaseAttributesProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }
}

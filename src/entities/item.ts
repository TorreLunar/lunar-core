import { InvalidPropsError } from "@/errors";

export interface ItemProps {
  name: string;
  description: string;
}

export class Item implements ItemProps {
  name: string;
  description: string;
  constructor(props: ItemProps) {
    Object.assign(this, props);
    Object.freeze(this);
  }

  static create(props: ItemProps): Item {
    if (!props.name) throw new InvalidPropsError("name");
    if (!props.description) throw new InvalidPropsError("description");

    return new Item(props);
  }
}

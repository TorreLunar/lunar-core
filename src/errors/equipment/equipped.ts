export class EquippedErrorEmptyList extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EquippedEmptyList";
  }
}

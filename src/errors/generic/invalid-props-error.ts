export class InvalidPropsError extends Error {
  constructor(props: string) {
    super(`${props} is invalid`);
    this.name = "InvalidProps";
  }
}

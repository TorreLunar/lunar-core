import { Item, ItemProps } from "@/entities";
import { InvalidPropsError } from "@/errors";

describe("Item Entity", () => {
  const suit = Item;
  const newItem: ItemProps = {
    name: "test item",
    description: "test_description",
  };
  it("should be defined", () => {
    expect(suit).toBeDefined();
  });
  it("should successfully create a new Item", () => {
    expect(suit.create(newItem)).not.toBeInstanceOf(InvalidPropsError);
  });

  it("should fail if name is empty", () => {
    try {
      suit.create({
        ...newItem,
        name: "",
      });
    } catch (err) {
      expect(err).toStrictEqual(new InvalidPropsError("name"));
    }
  });

  it("should fail if description is empty", () => {
    try {
      suit.create({
        ...newItem,
        description: "",
      });
    } catch (err) {
      expect(err).toStrictEqual(new InvalidPropsError("description"));
    }
  });
});

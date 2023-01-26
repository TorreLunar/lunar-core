import { Attributes, Equipment, Mob } from "@/entities";
const attributes = {
  health: 100,
  defense: 10,
  strength: 10,
  dexterity: 10,
};

const equipment = {
  inventory: [],
  equipped: [],
};

const mob = Mob.create({
  name: "Goblin",
  level: 1,
  isPlayer: false,
  attributes,
  equipment,
});

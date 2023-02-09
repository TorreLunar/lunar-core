import { TypeMobJob } from "@/utils";
import { BaseAttributes } from "./BaseAttribute";

export interface BaseEntityProps<Equipment> {
  name: string;
  level: number;
  job: TypeMobJob;
  health_points: number;
  attributes: BaseAttributes;
  equipment: Equipment;
}
export class BaseEntity<Equipment = any> implements BaseEntityProps<Equipment> {
  name: string;
  health_points: number;

  level: number;
  job: TypeMobJob;

  attributes: BaseAttributes;
  equipment: Equipment;

  constructor(data: BaseEntityProps<Equipment>) {
    this.name = data.name;
    this.health_points = data.health_points;
    this.job = data.job;
    this.level = data.level;
    this.attributes = data.attributes;
    this.equipment = data.equipment;
  }
  static _verify({
    name,
    attributes,
    health_points,
    equipment,
    level,
    job,
  }: BaseEntityProps<any>) {
    if (
      !name ||
      !attributes ||
      !health_points ||
      !equipment ||
      !level ||
      !job
    ) {
      throw new Error("[BaseEntity]:some parameter is invalid");
    }
  }
}

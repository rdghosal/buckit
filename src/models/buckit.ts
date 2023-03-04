import BaseRecord from "./basemodel";
import * as yup from "yup";

// ----------------------------------------------------------------- < Base >

class BaseInput extends BaseRecord {
  title: string;
  createdBy: string | null;
  description: string | null;

  constructor(
    title: string,
    createdBy?: string,
    description?: string,
    ...args: ConstructorParameters<typeof BaseRecord>
  ) {
    super(...args);
    this.title = title;
    this.createdBy = createdBy || null;
    this.description = description || null;
  }
}

interface IBaseInput {
  _id?: string;
  title: string;
  createdBy?: string;
  description?: string;
}

// --------------------------------------------------------------- < Buckets >

export class Bucket extends BaseInput {
  userIds: string[];
  constructor(
    userIds: string[] = [],
    ...args: ConstructorParameters<typeof BaseInput>
  ) {
    super(...args);
    this.userIds = userIds;
  }
}

export interface IBucket extends IBaseInput {
  userIds?: string[];
}

export const bucketSchema = new yup.ObjectSchema<IBucket>({
  _id: yup.string().optional(),
  title: yup.string().required(),
  createdBy: yup.string().optional(),
  description: yup.string().optional(),
  userIds: yup.array(yup.string().required()).optional(),
});

// ----------------------------------------------------------------  < Drops >

enum DropStatus {
  DONE = "done",
  PAUSED = "paused",
  ACTIVE = "active",
}

export class Drop extends BaseInput {
  dueDate: string | null;
  timeCompleted: string | null;
  location: string | null;
  status: DropStatus;
  constructor(
    dueDate?: string,
    timeCompleted?: string,
    location?: string,
    status?: DropStatus,
    ...args: ConstructorParameters<typeof BaseInput>
  ) {
    super(...args);
    this.dueDate = dueDate || null;
    this.timeCompleted = timeCompleted || null;
    this.location = location || null;
    this.status = status || DropStatus.ACTIVE;
  }
}

export interface IDrop extends IBaseInput {
  dueDate?: string;
  location?: string;
}

export const dropSchema = new yup.ObjectSchema<IDrop>({
  _id: yup.string().optional(),
  title: yup.string().required(),
  createdBy: yup.string().optional(),
  description: yup.string().optional(),
  location: yup.string().optional(),
  dueDate: yup.string().optional(),
});

import { ObjectId } from "mongodb";

class BaseRecord {
  _id: ObjectId;
  isActive: boolean;
  timeCreated: string;
  timeModified: string | null;
  timeDeleted: string | null;
  constructor(
    _id: ObjectId,
    isActive: boolean = true,
    timeCreated: string = new Date().toISOString(),
    timeModified: string | null = null,
    timeDeleted: string | null = null
  ) {
    this._id = _id;
    this.isActive = isActive;
    this.timeCreated = timeCreated;
    this.timeModified = timeModified;
    this.timeDeleted = timeDeleted;
  }
}

export default BaseRecord;

import BaseRecord from "./basemodel";

class Buckit extends BaseRecord {
  title: string;
  description: string | null;
  userIds: string[] = [];
  drops: Drop[] = [];
  constructor(
    title: string,
    description: string,
    drops: Drop[] = [],
    ...p: ConstructorParameters<typeof BaseRecord>
  ) {
    super(...p);
    this.title = title;
    this.description = description;
    this.drops = drops;
  }
}

class Drop extends BaseRecord {
  title: string;
  description: string | null;
  location: string;
  status: DropStatus;
  constructor(
    title: string,
    description: string,
    location: string,
    status: DropStatus,
    ...p: ConstructorParameters<typeof BaseRecord>
  ) {
    super(...p);
    this.title = title;
    this.description = description;
    this.location = location;
    this.status = status;
  }
}

enum DropStatus {
  DONE = "done",
  PAUSED = "paused",
  PROGRESS = "progress",
}

export { Buckit, Drop, DropStatus };

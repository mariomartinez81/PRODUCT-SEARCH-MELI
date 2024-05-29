export interface DescriptionProps {
  date_created: Date;
  last_updated: Date;
  plain_text: string;
  snapshot: Snapshot;
  text: string;
}

export interface Snapshot {
  height: number;
  status: string;
  url: string;
  width: number;
}

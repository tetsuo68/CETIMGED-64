export interface CreateTagModel {
  nomDuTag: string;
  description?: string;
  isPrimaryTag: boolean;
  idFirstTag: number;
}

export interface FirstTagModel {
  id: number;
  name: string;
  description: string;
  secondTags: SecondTagModel[];
}

export interface SecondTagModel {
  id: number;
  name: string;
  description: string;
}


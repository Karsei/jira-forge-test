import { Scope } from './Auth';

export interface IssueTypeDetails {
  self: string;
  id: string;
  description: string;
  iconUrl: string;
  name: string;
  subtask: boolean;
  avatarId: number;
  entityId: string;
  hierarchyLevel: number;
  scope: Scope;
}

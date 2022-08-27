export interface Project {
  self: string;
  id: string;
  key: string;
  name: string;
  projectTypeKey: string;
  simplified: boolean;
  avatarUrls: AvatarUrlsBean;
  projectCategory: UpdatedProjectCategory;
}

export interface AvatarUrlsBean {
  '16x16': string;
  '24x24': string;
  '32x32': string;
  '48x48': string;
}

export interface UpdatedProjectCategory {
  self: string;
  id: string;
  description: string;
  name: string;
}

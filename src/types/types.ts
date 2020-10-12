/**
 * Обработка поиска
 */
export type HandleSearch = (value: string) => void;

export type PageInfo = {
  endCursor: string;
  startCursor: string;
};

export type NodesUser = {
  __typename: string;
  id: string;
  url: string;
  avatarUrl: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  name: string;
  projects: {
    totalCount: number;
  };
  repositories: {
    totalCount: number;
  };
  websiteUrl: string | null;
};

export type ResponseGitHub = {
  search: { userCount: number; pageInfo: PageInfo; nodes: NodesUser[] };
};

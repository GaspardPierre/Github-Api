// On crée une interface pour décrire la structure de l'objet repos
export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url: string;
  };
}

// Interface, pour l'état global de l'application

export interface RepoState {
  repos: Repo[];
  isLoading: boolean;
  error: string | null;
}

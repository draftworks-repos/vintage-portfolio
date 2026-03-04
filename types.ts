
export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  client: string;
}

export interface NavItem {
  label: string;
  href: string;
}

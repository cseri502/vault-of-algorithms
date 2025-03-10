export type Algorithm = {
  id: string;
  name: string;
  description: string;
  category: string;
  availableLanguages: Array<string>;
};

export type Language = {
  id: string;
  name: string;
  icon: string;
};
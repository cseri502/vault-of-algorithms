export type Algorithm = {
  id: string;
  name: string;
  description: string;
  category: string;
  implementations: {
    [key: string]: string;
  };
};

export type Language = {
  id: string;
  name: string;
  icon: string;
};
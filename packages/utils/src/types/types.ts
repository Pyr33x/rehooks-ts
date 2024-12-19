export type Hook = Readonly<{
  id: number;
  title: string;
  description: string;
  content: string;
}>;

export type Card = {
  label: string;
  title: string;
  content?: string;
  code?: string;
  className?: string;
};

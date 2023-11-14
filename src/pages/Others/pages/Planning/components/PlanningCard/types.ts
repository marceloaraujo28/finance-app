export type PlannigCardProps = {
  id: number;
  categorie: string;
  created_at: string;
  metaValue: string;
  handleDelete: (id: number) => void;
};

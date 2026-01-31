export type Category = {
  _id: string; // Mongo ObjectId
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryProps = {
  categories: Category[];
};

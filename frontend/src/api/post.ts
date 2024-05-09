import axios from "axios";

export type Post = {
  title: string;
  description: string;
  explanation: string;
  solution: string;
};

export const fetchPosts = async () => {
  const res = await axios.get<Post[]>(
    "https://us-central1-leetsco.cloudfunctions.net/post"
  );
  return res.data;
};

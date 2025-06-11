import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Domyślne posty
let posts = [
  {
    id: uuidv4(),
    title: "Przykladowy tytul postu nr1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Kowalski",
  },
  {
    id: uuidv4(),
    title: "Przykladowy tytul postu nr2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Pucybut",
  },
];

// Ulubione posty
let favourites = new Set();

// Pobierz wszystkie posty z informacją, czy są ulubione
app.get("/posts", (req, res) => {
  const result = posts.map((post) => ({
    ...post,
    isFavorite: favourites.has(post.id),
  }));
  res.json(result);
});

// Dodaj nowy post
app.post("/posts", (req, res) => {
  const { title, description, author } = req.body;
  if (!title || !description || !author) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newPost = {
    id: uuidv4(),
    title,
    description,
    author,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Dodaj post do ulubionych
app.post("/favourites/:id", (req, res) => {
  const { id } = req.params;
  const postExists = posts.find((post) => post.id === id);

  if (!postExists) {
    return res.status(404).json({ message: "Post not found" });
  }

  favourites.add(id);
  res.json({ message: "Post added to favourites", id });
});

// Usuń post z ulubionych
app.delete("/favourites/:id", (req, res) => {
  const { id } = req.params;
  favourites.delete(id);
  res.json({ message: "Post removed from favourites", id });
});

// Pobierz ulubione posty
app.get("/favourites", (req, res) => {
  const favoritePosts = posts
    .filter((post) => favourites.has(post.id))
    .map((post) => ({
      ...post,
      isFavorite: true,
    }));

  res.json(favoritePosts);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

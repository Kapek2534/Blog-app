import { PostList } from "../components/PostList/PostList";
import { Topics } from "../components/Topics/Topics";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";

const posts = [
  {
    id: 1,
    title: "Przykladowy tytul postu nr1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Kowalski",
  },
  {
    id: 2,
    title: "Przykladowy tytul postu nr2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Pucybut",
  },
  {
    id: 3,
    title: "Przykladowy tytul postu nr3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Szczupak",
  },
  {
    id: 4,
    title: "Przykladowy tytul postu nr4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Kamień",
  },
  {
    id: 5,
    title: "Przykladowy tytul postu nr5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio corrupti laboriosam possimus quaerat unde, excepturi, accusantium sint laborum mollitia, alias non iste blanditiis atque veritatis fuga commodi voluptatum? Officia.",
    author: "Jan Nowak",
  },
];

export function PostsPage() {
  return (
    <FlexContainer>
      <Topics posts={posts} />
      <PostList posts={posts} />
    </FlexContainer>
  );
}

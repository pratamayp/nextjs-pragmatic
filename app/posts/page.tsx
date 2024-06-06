import { Post } from '@/type/posts';
import ClapButton from './clap-button';
import Link from 'next/link';

const getPost = async (): Promise<Post[]> => {
  const url = 'http://localhost:3001/posts';
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(url, { cache: 'no-store' });
  return res.json();
};

const ServerActon = async () => {
  const posts = await getPost();

  return (
    <section>
      {posts.map((post) => (
        <article key={post.id} className="border-b border-white py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <ClapButton postId={post.id} clap={post.clap} />
          <div className="mt-2">
            <Link href={`/posts/${post.id}`}>Read More</Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ServerActon;

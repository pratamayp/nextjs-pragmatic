import { Post } from '@/type/posts';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Comments from './comments';
import { notFound } from 'next/navigation';

const getPost = async (id: Post['id']) => {
  const url = 'http://localhost:3001/posts';
  const res = await fetch(`${url}/${id}`);
  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePost = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p>{post.body}</p>
      <Suspense fallback={<p>Loading comments...</p>}>
        <Comments />
      </Suspense>
    </section>
  );
};

export default SinglePost;

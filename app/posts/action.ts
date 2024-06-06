'use server';

const url = 'http://localhost:3001/posts';

export type CreatePostResponse = {
  message: string;
};

export const createPost = async (
  prevData: CreatePostResponse,
  formData: FormData
): Promise<CreatePostResponse> => {
  const title = formData.get('title');
  const body = formData.get('body');

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ title, body }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return {
    message: 'Post created successfully!',
  };
};

export const clapPost = async (postId: string, clap: number) => {
  const updatedClap = clap + 1;

  await fetch(`${url}/${postId}`, {
    method: 'PATCH',
    body: JSON.stringify({ clap: updatedClap }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return updatedClap;
};

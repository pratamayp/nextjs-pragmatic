'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { CreatePostResponse, createPost } from '../action';

const initialState: CreatePostResponse = {
  message: '',
};

const CreateForm = () => {
  const [state, formAction] = useFormState(createPost, initialState);

  return (
    <form action={formAction}>
      {state.message ? <p>{state.message}</p> : null}
      <fieldset>
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="text-black"
          required
        />
      </fieldset>
      <fieldset>
        <label htmlFor="body" className="block">
          Body
        </label>
        <textarea name="body" id="body" className="text-black" required />
      </fieldset>

      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  if (pending) {
    return <p>Creating...</p>;
  }

  return (
    <button type="submit" className="bg-blue-600 p-2">
      Create Post
    </button>
  );
};

export default CreateForm;

const getComments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const Comments = async () => {
  await getComments();

  return (
    <section>
      <h2>Comments</h2>
      <p>This is just a placeholder for the comments section.</p>
    </section>
  );
};

export default Comments;

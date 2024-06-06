import Link from 'next/link';

const ServerActionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen">
      <div className="flex gap-2">
        <Link href="/posts">List</Link>
        <Link href="/posts/create">Create</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ServerActionLayout;

'use client';

import { useState } from 'react';
import { clapPost } from './action';

const ClapButton = ({ postId, clap }: { postId: string; clap: number }) => {
  const [claps, setClaps] = useState(clap);

  const handleClick = async () => {
    const updatedClaps = await clapPost(postId, claps);
    setClaps(updatedClaps);
  };

  return <button onClick={handleClick}>👏 ({claps})</button>;
};

export default ClapButton;

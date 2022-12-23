import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ isLoader }) => {
  return (
    <div className={isLoader ? 'animate-spin h-14 w-14' : 'h-10 w-10'}>
      <Link href="/">
        <Image src="/images/logo/logo.png" alt="logo" width={56} height={56} />
      </Link>
    </div>
  );
};

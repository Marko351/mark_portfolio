import React from 'react';
import Image from 'next/image';
import LogoImg from './logo.svg';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="h-10 w-10">
      <Link href="/">
        <Image src="/images/logo/logo.png" alt="logo" width={56} height={56} />
      </Link>
    </div>
  );
};

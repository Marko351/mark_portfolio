import React from 'react';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

export const SocialLinks = () => {
  return (
    <>
      <a href="https://www.linkedin.com/in/marko-djuric-20a225140/" target="_blank" className="cursor-none">
        <LinkedinOutlined className="social-icons mb-2" />
      </a>
      <a href="https://www.instagram.com/markk351/" target="_blank" className="cursor-none">
        <InstagramOutlined className="social-icons mb-2" />
      </a>
      <a href="https://github.com/Marko351" target="_blank" className="cursor-none">
        <GithubOutlined className="social-icons mb-4" />
      </a>
    </>
  );
};

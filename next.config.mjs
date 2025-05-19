import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects() {
			return [{
        source: '/docs',
        destination: "/docs/welcome/about-swift",
        permanent: true
      }];
		}
};

export default withMDX(config);

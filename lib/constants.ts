const isProd = process.env.NODE_ENV === 'production';
const repoName = 'avocet.github.io'

export const BASE_PATH = isProd ? '/avocet.github.io' : '/dist';
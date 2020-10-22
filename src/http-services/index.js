import { instance } from './instance';

export const Services = {
    getAllPosts: () => instance.get('/posts')
};

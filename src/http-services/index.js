import { instance } from './instance';

export const Services = {
    getAllPosts: () => instance.get('/posts'),
    getPost: (id) => instance.get('/posts/' + id),
    postPost: (content) => instance.post('/posts/' + content),
    putPost: (id, content) => instance.put('/posts/' + id + '/' + content),
    deletePost: (id) => instance.delete('/posts/' + id),

    getAllComments: () => instance.get('/posts'),
    getComment: (id) => instance.get('/posts/' + id),
    postComment: (content) => instance.post('/posts/' + content),
    putComment: (id, content) => instance.put('/posts/' + id + '/' + content),
    deleteComment: (id) => instance.delete('/posts/' + id),
}
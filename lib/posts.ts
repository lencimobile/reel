export let posts = [];

export const addPost = (p) => posts.push(p);
export const getPost = (id) => posts.find(p => p.id === id);
export const getAllPosts = () => posts;
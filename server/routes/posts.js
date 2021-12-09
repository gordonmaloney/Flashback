import express from 'express';

import { createPost, getPosts, updatePost, deletePost, addComment, updateComment, deleteComment } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

router.post('/:id', addComment)

router.patch('/:id/:commentId', updateComment)
router.delete('/:id/:commentId', deleteComment)

export default router;
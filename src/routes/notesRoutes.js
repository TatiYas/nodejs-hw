import { Router } from 'express';
import {
  getNoteById,
  createNote,
	getAllNotes,
  deleteNote,
  updateNote
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.get('/notes', getAllNotes);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

export default router;
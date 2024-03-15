import { Router } from 'express';
import { createChannel, getAllChannels, getChannelById, updateChannel, deleteChannel } from '@/controllers/channel.controller';

const router = Router();

// Create a new channel
router.post('/', createChannel);

// Get all channels
router.get('/', getAllChannels);

// Get a single channel by ID
router.get('/:id', getChannelById);

// Update a channel by ID
router.patch('/:id', updateChannel);

// Delete a channel by ID
router.delete('/:id', deleteChannel);

export default router;
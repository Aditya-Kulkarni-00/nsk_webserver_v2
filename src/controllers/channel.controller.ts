// channel.controller.ts
import { Request, Response } from 'express';
import Channel from "@/models/channel.model";

// Controller for creating a new channel
export const createChannel = async (req: Request, res: Response) => {
  try {
    const newChannel = await Channel.create(req.body);
    return res.status(201).json(newChannel);
  } catch (error : any) {
    return res.status(400).json({ message: error.message });
  }
};

// Controller for getting all channels
export const getAllChannels = async (_: Request, res: Response) => {
  try {
    const channels = await Channel.find();
    return res.json(channels);
  } catch (error : any) {
    return res.status(500).json({ message: error.message });
  }
};

// Controller for getting a single channel by ID
export const getChannelById = async (req: Request, res: Response) => {
  try {
    const channel = await Channel.findById(req.params.id);
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    return res.json(channel);
  } catch (error : any) {
    return res.status(500).json({ message: error.message });
  }
};

// Controller for updating a channel by ID
export const updateChannel = async (req: Request, res: Response) => {
  try {
    const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedChannel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    return res.json(updatedChannel);
  } catch (error : any) {
    return res.status(400).json({ message: error.message });
  }
};

// Controller for deleting a channel by ID
export const deleteChannel = async (req: Request, res: Response) => {
  try {
    const deletedChannel = await Channel.findByIdAndDelete(req.params.id);
    if (!deletedChannel) {
      return res.status(404).json({ message: 'Channel not found' });
    }
    return res.json({ message: 'Channel deleted' });
  } catch (error : any) {
    return res.status(500).json({ message: error.message });
  }
};

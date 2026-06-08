import { Request, Response } from 'express';
import { z } from 'zod';
import Task from '../models/Task';

const taskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(['pending', 'in-progress', 'completed']).optional(),
});

export const getTasks = async (req: any, res: Response): Promise<void> => {
  try {
    let tasks;
    if (req.user.role === 'admin') {
      tasks = await Task.find().populate('user', 'username email');
    } else {
      tasks = await Task.find({ user: req.user.id });
    }
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getTaskById = async (req: any, res: Response): Promise<void> => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    if (task.user.toString() !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({ error: 'Not authorized' });
      return;
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createTask = async (req: any, res: Response): Promise<void> => {
  try {
    const validatedData = taskSchema.parse(req.body);
    const task = await Task.create({
      ...validatedData,
      user: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: (error as any).errors });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

export const updateTask = async (req: any, res: Response): Promise<void> => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    if (task.user.toString() !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({ error: 'Not authorized' });
      return;
    }

    const validatedData = taskSchema.partial().parse(req.body);
    task = await Task.findByIdAndUpdate(req.params.id, validatedData, { new: true });
    
    res.json(task);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: (error as any).errors });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

export const deleteTask = async (req: any, res: Response): Promise<void> => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    if (task.user.toString() !== req.user.id && req.user.role !== 'admin') {
      res.status(403).json({ error: 'Not authorized' });
      return;
    }

    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

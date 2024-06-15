import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { validateUsername, validatePassword } from '../utils/automation';

export const createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!validateUsername(username) || !validatePassword(password)) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    try {
        const userRepository = getRepository(User);
        const user = new User();
        user.username = username;
        user.password = password;

        await userRepository.save(user);
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(User);
        const users = await userRepository.find();
        res.status(200).json(users);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { username, password } = req.body;

    if (!validateUsername(username) || !validatePassword(password)) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id } }); // Corrigido

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.username = username;
        user.password = password;

        await userRepository.save(user);
        res.status(200).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    try {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { id } }); // Corrigido

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await userRepository.remove(user);
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ message: errorMessage });
    }
};

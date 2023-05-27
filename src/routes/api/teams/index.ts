import {
    createTeams,
    getAllTeams,
    getTeams,
    updateTeam,
    deleteTeam,
} from '@server/libs/teams/teams';
import express from 'express';

const router = express.Router();

router.get('/all', async (_req, res) => {
    try {
        const teams = await getAllTeams();
        res.json(teams);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.get('/search/:id', async (req, res) => {
    try {
        const {id = ''} = req.params;
        const teams = await getTeams(id);
        res.json(teams);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.post('/new', async (req, res) => {
    try {
        const { name = '', description = '', participants = '', isActive = false } = req.body;
        const newTeam = { name, description, participants, isActive: isActive && true };
        const createdTeam = await createTeams(newTeam);
        res.json(createdTeam);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id = '' } = req.params;
        const { name = '', description = '', participants = '', isActive = true } = req.body;

        const updatedTeam = await updateTeam(id , {
            name,
            description,
            participants,
            isActive
        });
        res.json(updatedTeam);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.delete('/delete/:id', async (req, res) => {

    try {
        const { id = '' } = req.params;
        const deletedTeam = await deleteTeam(id)
        res.json({ deleted: deletedTeam, id });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

export default router;
import {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
} from '@server/libs/projects/projects';
import express from 'express';

const router = express.Router();

router.get('/all', async (_req, res) => {
    try {
        const projects = await getProjects();
        res.json(projects);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

// /api/projects/echo/hola?variable1=a&variable2=b

router.get('/echo/:msg', (req, res) => {
    const { msg } = req.params;
    const { variable1 = 'Hola', variable2 = 'Mundo' } = req.query;
    res.json({ msg, variable1, variable2 });
});

router.post('/echo2', (req, res) => {
    const { variable1 = 'Hola', variable2 = 'Mundo' } = req.body;
    res.json({ variable1, variable2 });
});

router.post('/new', async (req, res) => {
    try {
        const { name = '', description = '', isActive = false } = req.body;
        const newProject = { name, description, isActive: isActive && true };
        const createdProject = await createProject(newProject);
        res.json(createdProject);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name = '', description = '', isActive = true } = req.body;

        const updatedProject = await updateProject(id, {
            name,
            description,
            isActive,
        });
        res.json(updatedProject);
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

router.delete('/delete/:id', async (req, res) => {

    try {
        const { id = '' } = req.params;
        const deletedProject = await deleteProject(id)
        res.json({ deleted: deletedProject, id });
    } catch (ex: any) {
        return res.status(500).json({ error: ex?.message });
    }
});

export default router;

//Fernando Mendoza 0321200200561

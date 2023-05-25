export interface IProject {
    _id?: string;
    name: string;
    description: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

//Si se utiliza el Required todos los campos se hacen obligatorios const newPrject: Required<IProject>

const memoryProjects: IProject[] = [];
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let createdProjects: number = 0;

export const createProject = async (project: IProject) => {
    const newProject = { ...project };
    newProject._id = (++createdProjects).toString();
    newProject.createdAt = new Date();
    newProject.updatedAt = newProject.createdAt;
    memoryProjects.push(newProject);
    return newProject;
}

export const getProjects = async () => {
    return memoryProjects;
}

export const updateProject = (id: string, project: IProject) => {

    const index = memoryProjects.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');

    memoryProjects[index] = { ...memoryProjects[index], ...project, updatedAt: new Date() };
    return memoryProjects[index];
}

export const deleteProject = (id: string) => {
    const index = memoryProjects.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Project not found');
    memoryProjects.splice(index, 1);
    return true;
}

//Fernando Mendoza 0321200200561
import { ProjectDao } from '@server/dao/models/ProjectsDao'

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
//let createdProjects: number = 0;

const ProjectDaoInstance = new ProjectDao();

export const createProject = async (project: IProject) => {
    return ProjectDaoInstance.create(project)
}

export const getProjects = async () => {
    return ProjectDaoInstance.find({});
}

export const getProject = async (id: string) => {
    return ProjectDaoInstance.findOne(id);
}

export const updateProject = (id: string, project: IProject) => {

    return ProjectDaoInstance.update(id, project)
}

export const deleteProject = (id: string) => {
    return ProjectDaoInstance.delete(id);
}

//Fernando Mendoza 0321200200561
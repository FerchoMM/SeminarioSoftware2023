export interface ITeams{
    _id?: string;
    name: string;
    description: string;
    participants: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const memoryTeams: ITeams[] = [];
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let createdTeams: number = 0;

export const createTeams = async (team: ITeams) => {
    const newTeam = { ...team };
    newTeam._id = (++createdTeams).toString();
    newTeam.createdAt = new Date();
    newTeam.updatedAt = newTeam.createdAt;
    memoryTeams.push(newTeam);
    return newTeam;
}

export const getAllTeams = async () => {
    return memoryTeams;
}

export const getTeams = async (id: string) => {
    const index = memoryTeams.findIndex(p => p._id === id)
    return memoryTeams[index];
}

export const updateTeam = (id: string, team: ITeams) => {
    const index = memoryTeams.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Team not found');

    memoryTeams[index] = { ...memoryTeams[index], ...team, updatedAt: new Date() };
    return memoryTeams[index];
}

export const deleteTeam = (id: string) => {
    const index = memoryTeams.findIndex(p => p._id === id);
    if (index === -1) throw new Error('Team not found');
    memoryTeams.splice(index, 1);
    return true;
}

//Fernando Mendoza 0321200200561
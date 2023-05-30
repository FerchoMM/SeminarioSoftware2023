export abstract class DaoBase<T> {
    public abstract create(item: T): Promise<boolean>;
    public abstract update(id: string, item: Partial<T>): Promise<boolean>;
    public abstract delete(id: string): Promise<boolean>;
    public abstract find(item: T): Promise<T[]>;
    public abstract findOne(id: string): Promise<T>;
}

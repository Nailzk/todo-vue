import { ICreateItem, StoreActionParams } from '@/store/interface';
import { ITask, TasksState } from '@/store';
import TasksService from '@/store/task/tasks-service.ts';

export const createItem: StoreActionParams<
  TasksState,
  ICreateItem<ITask>
> = async function (task: ICreateItem<ITask>): Promise<void> {
  const item = await TasksService.create(task);
  this.items.push(item);
  this.total = this.items.length;
};

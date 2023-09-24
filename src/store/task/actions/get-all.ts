import { StoreAction } from '@/store/interface';
import { TasksState } from '@/store';
import TasksService from '../tasks-service';

export const getAll: StoreAction<TasksState> = async function () {
  const items = await TasksService.getAll();

  this.items = items;
  this.total = items.length;
};

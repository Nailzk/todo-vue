import { StoreActionParams } from '@/store/interface';
import { ITask, TasksState } from '@/store';
import TasksService from '@/store/task/tasks-service.ts';

export const deleteItem: StoreActionParams<TasksState, number> =
  async function (id: number) {
    await TasksService.delete(id);

    const index = this.items.findIndex((val: ITask) => val.id === id);

    if (index >= 0) {
      this.items = this.items.filter((val: ITask) => val.id !== id);
      this.total = this.items.length;
    }
  };

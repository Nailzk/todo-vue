import { defineStore } from 'pinia';
import {
  createItem,
  deleteItem,
  getAll,
  updateItem,
} from '@/store/task/actions';
import { IBaseItem } from '../interface';

export interface ITask extends IBaseItem {
  id: number;
  name: string;
  isDone: boolean;
  createdAt: Date;
}

export type TasksState = {
  items: ITask[];
  total: number;
};

export const useTasksStore = defineStore({
  id: 'tasksStore',
  state: () =>
    ({
      items: [],
      total: 0,
    }) as TasksState,
  actions: {
    getAll,
    createItem,
    updateItem,
    deleteItem,
  },
});

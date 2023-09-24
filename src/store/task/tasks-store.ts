import {defineStore} from "pinia";
import {createItem, deleteItem, updateItem,getAll} from "@/store/task/actions";

export type ITask = {
    id: number;
    name: string;
    isDone: boolean;
    createdAt: Date;
}

export type TasksState = {
    items: ITask[];
    total: number;
    updateLoading: boolean;
}

export const useTasksStore = defineStore({
    id: 'tasksStore',
    state: () => ({
        items: [],
        total: 0,
        updateLoading: false,
    } as TasksState),
    actions: {
        getAll,
        createItem,
        updateItem,
        deleteItem
    }
})
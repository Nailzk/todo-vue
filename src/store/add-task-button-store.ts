import {defineStore} from "pinia";

export type AddTaskButtonStore = {
    isActive: boolean;
}

export const useAddTaskButtonStore = defineStore({
    id: 'addTaskButtonStore',
    state: () => ({
        isActive: false,
    } as AddTaskButtonStore),
    actions: {
        change() {
            this.isActive = !this.isActive;
        }
    }
})
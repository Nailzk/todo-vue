import {StoreAction} from "@/store/interface";
import {ITask, TasksState} from "@/store";
import TasksService from "@/store/task/tasks-service.ts";

export const updateItem: StoreAction<TasksState, ITask> = async function (task: ITask) {
    const taskRes = await TasksService.updateItem(task);

    const index = this.items.findIndex((val: ITask) => val.id === taskRes.id);

    if (index >= 0) {
        this.items[index] = taskRes;
    }
}
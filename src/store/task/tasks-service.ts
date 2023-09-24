import axios from "axios";
import {ITask} from "@/store";
import {ICreateItem} from "@/store/interface";

const BASE_URL = `${import.meta.env.VITE_DB_URL}${import.meta.env.VITE_TODO_API_URL}`;

class TasksService {
    async getAll(): Promise<ITask[]> {
        const res = await axios.get<ITask[]>(BASE_URL);

        return res.data;
    }

    async delete(id: number): Promise<void> {
        await axios.delete<void>(`${BASE_URL}/${id}`)
    }

    async create(item: ICreateItem<ITask>): Promise<ITask> {
        const res = await axios.post<ITask>(BASE_URL, item)

        return res.data;
    }

    async updateItem(item: ITask): Promise<ITask> {
        const res = await axios.put<ITask>(`${BASE_URL}/${item.id}`, item)

        return res.data;
    }
}

export default new TasksService();
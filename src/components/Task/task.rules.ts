export const TASK_INPUT_RULES: ((value: string) => boolean |string)[] = [
    value => !!value || 'Task name is required',
    value => (value || '').length >= 3 || 'Task name length can not be lower then 3 characters',
]
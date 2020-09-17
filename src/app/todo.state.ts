import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from './todolist/models/todo';
import { CreateTodo, DeleteTodo, SetCurrentFilter, ToggleAllTodos, ToggleTodo } from './todolist/models/todo.actions';

interface TodoStateModel {
    todos: Todo[]
}

const sampleTodos: Todo[] = [];

@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        todos: sampleTodos
    }
})
export class TodoState {

    @Selector()
    static todos(state: TodoStateModel): Todo[] {
        return state.todos;
    }

    @Selector()
    static numUncheckedTodos(state: TodoStateModel): number {
        return state.todos.filter(todo => !todo.done).length;
    }

    @Action(CreateTodo)
    createTodo(ctx: StateContext<TodoStateModel>, action: CreateTodo) {
        const todo = { description: action.payload, done: false };
        ctx.patchState({
            todos: [todo, ...ctx.getState().todos]
        });
    }

    @Action(DeleteTodo)
    deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo) {
        const { todos } = ctx.getState();
        ctx.patchState({
            todos: todos.filter(todo => todo !== action.payload)
        });
    }

    @Action(ToggleTodo)
    toggleTodo(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
        const todo = action.payload;
        todo.done = !todo.done;
        ctx.patchState({
            todos: [...ctx.getState().todos]
        })
    }

    @Action(ToggleAllTodos)
    toggleAllTodos(ctx: StateContext<TodoStateModel>, action: ToggleTodo) {
        const { todos } = ctx.getState();
        const allDone = todos.every(todo => todo.done);
        todos.forEach(todo => todo.done = !allDone);
        ctx.patchState({
            todos: [...todos]
        })
    }

}
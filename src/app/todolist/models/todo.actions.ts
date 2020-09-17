import { Todo } from './todo';

export class CreateTodo {
  static readonly type = '[TODO] Create Todo';

  constructor(public payload: string) {}
}

export class ToggleTodo {
  static readonly type = '[TODO] Toggle Todo';

  constructor(public payload: Todo) {}
}

export class DeleteTodo {
  static readonly type = '[TODO] Delete Todo';

  constructor(public payload: Todo) {}
}

export class ToggleAllTodos {
  static readonly type = '[TODO] Toggle all Todos';
}

export class SetCurrentFilter {
  static readonly type = '[Filter] Set current filter';
  constructor(public payload: { filter: string }) {}
}
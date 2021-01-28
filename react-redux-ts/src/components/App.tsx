import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  // Cheating here.
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  // We are rewriting the state prop here, so we don't need to pass an AppState interface.
  // Otherwise, we need to define a state inside a constructor function.
  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  handleButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

const mapDispatchToProps = {
  fetchTodos,
  deleteTodo,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);

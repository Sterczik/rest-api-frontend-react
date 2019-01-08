import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import PageHeading from '../../components/PageHeading/PageHeading';

import {
  getTodos,
  createTodo,
  removeTodo,
  switchTodoStatus,
  editTodo
} from './actions';

export class TodosPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      edit: false,
      editName: ''
    };

    this.resetInput = this.resetInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startEditTodo = this.startEditTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.cancelEditTodo = this.cancelEditTodo.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();

    ValidatorForm.addValidationRule('minLength', (value) => value.length < 3 ? false : true);
    ValidatorForm.addValidationRule('maxLength', (value) => value.length > 80 ? false : true);
  }

  resetInput() {
    this.setState({ name: '' });
  }

  startEditTodo(id, name) {
    this.setState({ edit: id, editName: name });
  }

  cancelEditTodo() {
    this.setState({ edit: false, editName: '' });
  }

  editTodo(id, updates) {
    this.props.editTodo(id, { name: updates });
    this.setState({ edit: false, editName: '' });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name } = this.state;

    if (name) {
      this.props.createTodo(name);
      this.resetInput();
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <Helmet
          titleTemplate="Your Todos"
          defaultTitle="Your Todos"
        >
          <meta name="description" content="Your Todos" />
        </Helmet>
        <PageHeading title="Your Todos" />
        <Card>
          <CardContent className="card__content">
            <ValidatorForm
              className="card__form"
              onSubmit={this.handleSubmit}
            >
              <TextValidator
                name="name"
                label="Todo"
                type="text"
                value={name}
                onChange={this.handleChange}
                margin="normal"
                validators={['required', 'minLength', 'maxLength']}
                errorMessages={[
                  'Todo is required',
                  'Todo must contain at least 3 characters',
                  'Todo must contain maximum 80 characters'
                ]}
              />
              <div>
                <Tooltip title="Add Todo">
                  <IconButton aria-label="Add Todo" color="primary" type="submit" className="card__icon">
                    <AddCircleIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </ValidatorForm>
          </CardContent>
        </Card>
        <div>
          {
            this.props.todos.length === 0 ? (
              <Card className="card">
                <CardContent className="card__content">
                  <Typography variant="title" color="inherit">
                    No todos yet
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              this.props.todos.map((todo) => (
                <Card key={todo.id} className="card">
                  <CardContent className="card__content">
                    { this.state.edit && this.state.edit === todo.id ? (
                      <ValidatorForm
                        className="card__form"
                        onSubmit={() => this.editTodo(todo.id, this.state.editName)}
                      >
                        <TextValidator
                          name="editName"
                          label="Todo"
                          type="text"
                          value={this.state.editName}
                          onChange={this.handleChange}
                          margin="normal"
                          validators={['required', 'minLength', 'maxLength']}
                          errorMessages={[
                            'Todo is required',
                            'Todo must contain at least 3 characters',
                            'Todo must contain maximum 80 characters'
                          ]}
                        />
                        <div>
                          <Tooltip title="Confirm">
                            <IconButton className="card__icon" aria-label="Confirm" color="primary" type="submit">
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Cancel">
                            <IconButton color="primary" className="card__icon" onClick={() => this.cancelEditTodo()}>
                              <CancelIcon />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </ValidatorForm>
                    ) : (
                      <Typography variant="title" color="primary" className={todo.isDone ? 'card__text card__text--done' : 'card__text'}>
                        { todo.name }
                      </Typography>
                    ) }
                    <div className="card__icons">
                      <Tooltip title="Delete">
                        <IconButton color="primary" className="card__icon" onClick={() => this.props.removeTodo(todo.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Change Status">
                        <IconButton color="primary" className="card__icon" onClick={() => this.props.switchTodoStatus(todo.id)}>
                          <SwapHorizIcon />
                        </IconButton>
                      </Tooltip>
                      { this.state.edit && this.state.edit === todo.id ? (
                        null
                      ) : (
                        <Tooltip title="Edit">
                          <IconButton color="primary" className="card__icon" onClick={() => this.startEditTodo(todo.id, todo.name)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      ) }
                    </div>
                  </CardContent>
                </Card>
              ))
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos()),
  createTodo: (name) => dispatch(createTodo(name)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  switchTodoStatus: (id) => dispatch(switchTodoStatus(id)),
  editTodo: (id, todo) => dispatch(editTodo(id, todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);

import ReactDOM from "react-dom"
import React from "react"

class TaskList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.tasks.map(val => (
					<li key={val.id} onClick={val.remove}>
						{val.text}
					</li>
				))}
			</ul>
		)
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = { text: "", tasks: [] }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	render() {
		return (
			<>
				<TaskList tasks={this.state.tasks} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.text} />
					<button>Add task</button>
				</form>
			</>
		)
	}
	handleChange(event) {
		this.setState({ text: event.target.value })
	}
	handleSubmit(event) {
		event.preventDefault()
		if (this.state.text.length === 0) return
		const newTask = {
			text: this.state.text,
			id: Date.now(),
			remove: () => {
				this.state.tasks.splice(this.state.tasks.indexOf(newTask), 1)
				this.forceUpdate()
			},
		}
		this.setState(state => ({
			text: "",
			tasks: state.tasks.concat(newTask),
		}))
	}
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))

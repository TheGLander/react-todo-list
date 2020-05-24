import ReactDOM from "react-dom"
import React from "react"

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
		}
		this.setState(
			state => ({
				text: "",
				tasks: state.tasks.concat(newTask),
			}),
			() => console.log(this.state)
		)
	}
}
ReactDOM.render(<TodoApp />, document.getElementById("root"))

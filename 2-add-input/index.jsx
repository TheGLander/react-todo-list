import ReactDOM from "react-dom"
import React from "react"

class TodoApp extends React.Component {
	render() {
		return (
			<>
				<form>
					<input />
					<button>Add task</button>
				</form>
			</>
		)
	}
}
ReactDOM.render(<TodoApp />, document.getElementById("root"))

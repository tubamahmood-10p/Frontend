class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
     }
    // Add handleChange() and submitMessage() methods here
  handleChange(event)
  {
   this.setState(state => ({
    input    :event.target.value,
    messages :this.state.messages}));
  }
  submitMessage(event)
  {
    this.setState(state => ({
    input :'',
    messages: [...this.state.messages, this.state.input]}))
  }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.input} />
  <button type="submit" onClick={this.submitMessage.bind(this)}>Submit</button>
  <ul>
  {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
  </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
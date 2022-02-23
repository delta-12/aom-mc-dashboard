import { Component } from "react"
import axios from "axios"
import Header from "./components/Header"
import Charts from "./components/Charts"
import TableRow from "./components/TableRow"

export default class App extends Component {

  intervalID

  state = {
    data: {},
    error: null
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID)
  }

  getData() {
    axios
      .get("/api/minecraft-server/info")
      .then(res => {
        this.setState({
          data: res.data.data
        })
      })
      .catch(err =>
        this.setState({
          error: err.response.data.error
        })
      )
    this.intervalID = setTimeout(this.getData.bind(this), 5000)
  }

  render() {
    if (this.state.data !== null) {
      return (
        <div>
          <Header />
          <div className="container-fluid d-flex mt-5">
            <main className="col-md-12 ml-sm-auto px-4 mt-5" >
              <div className="row gap-1">
              <table className="table table-hover">
                  <tbody>
                    <TableRow title="Status" data={(this.state.data.status === "Online") ? <span className="text-success">&#10004; {this.state.data.status}</span>: <span className="text-danger">&#10006; {this.state.data.status}</span>} />
                    <TableRow title="Address" data={this.state.data.address + ":" + this.state.data.port} />
                    <TableRow title="Seed" data={this.state.data.seed} />
                    <TableRow title="Version" data={this.state.data.version} />
                    <TableRow title="Difficulty" data={this.state.data.difficulty} />
                  </tbody>
                </table>
                {
                  (this.state.data.status === "Online") ? <Charts onlinePlayers={parseInt(this.state.data.onlinePlayers)} maxPlayers={parseInt(this.state.data.maxPlayers)} /> : null
                }
              </div>
            </main>
          </div>
          <hr className="my-5" style={{ visibility: "hidden" }}></hr>
          <hr className="my-5" style={{ visibility: "hidden" }}></hr>
        </div>
      )
    }
  }

}
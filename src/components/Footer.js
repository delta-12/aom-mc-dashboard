import React from "react"

class Footer extends React.Component {

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p>Copyright &copy; aom-mc-dashboard.herokuapp.com 2022</p>
          <p>Check out the code on <a href="https://github.com/delta-12/aom-mc-dashboard">Github</a>!</p>
        </div>
      </div>
    )
  }

}

export default Footer
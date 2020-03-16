import React from 'react';
import evaluators from '../config/evaluators';
import axios from 'axios';

class Evaluation extends React.Component {
  state = {

  }

  postEvaluation = async () => {
    await axios.post('http://sebastianrcnt.iptime.org/api/evaluations/', this.state)
    .then((response) => {
      alert(response.data);
    })
    .catch((response) => {
      alert(response.data);
    })
    window.location.reload(false);
  }

  handleChange = (e) => {
    var obj = {};
    obj[e.target.name] = e.target.value;
    console.log(obj)
    this.setState(obj)
  }

  componentDidMount() {
    this.setState(this.props.evaluation)
  }

  render() {
    if (!this.props.evaluation) {
      return null;
    }

    return (
      <div className="evaluation box-shadow">
        <div className="grid-container">
          <div className="grid-title">
            <i className="material-icons">
              face
            </i>
            <span>{this.state.evaluator}</span>
          </div>
          <div className="grid-item">
            <small>실력</small>
            <input type="number" name='score1' onChange={this.handleChange} value={this.state.score1} placeholder='00' />
          </div>
          <div className="grid-item">
            <small>성격</small>
            <input type="number" name='score2' onChange={this.handleChange} value={this.state.score2} placeholder='00' />
          </div>
          <div className="grid-item">
            <small>발전가능성</small>
            <input type="number" name='score3' onChange={this.handleChange} value={this.state.score3} placeholder='00' />
          </div>
          <div className="grid-item">
            <small>헌신도</small>
            <input type="number" name='score4' onChange={this.handleChange} value={this.state.score4} placeholder='00' />
          </div>
          <div className="grid-textarea">
            <textarea onChange={this.handleChange} name='memo' value={this.state.memo} placeholder='메모' rows='10'></textarea>
          </div>
          <div className="grid-button">
            <button type="button" onClick={this.postEvaluation}>저장하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Evaluation;
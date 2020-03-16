import React from 'react';
import axios from 'axios';
import Evaluation from './Evaluation';
import evaluators from '../config/evaluators';
import Field from './Field'

class ApplicantDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isReady: false,
  }

  async componentDidMount() {
    console.log('component mounted')
    if (this.props.applicant) {
      var data = await axios.get(`http://sebastianrcnt.iptime.org/api/evaluations/id?id=${this.props.applicant._id}`);
      if (data) {
        this.setState({
          evaluations: data.data,
          isReady: true,
        })
      }
    }
  }

  alreadyEvaluated = (evaluations, evaluator) => {
    for (var evaluation of evaluations) {
      if (evaluation.evaluator == evaluator) {
        return true;
      }
    }
    return false;
  }

  getEvaluationByEvaluator = (evaluations, evaluator) => {
    for (var evaluation of evaluations) {
      if (evaluation.evaluator == evaluator) {
        return evaluation;
      }
    }
    return null;
  }

  render() {
    if (this.state.isReady) {
      var applicant = this.props.applicant
      if (Array.isArray(applicant['field[]'])) {
        applicant.fields = applicant['field[]']
      } else {
        applicant.fields = [applicant['field[]']]
      }
      return (
        <div className="applicant-detail-view">
          <div className="applicant-info">
            <div className="profile">
              <h1>{applicant.name}</h1>
              <p>{applicant.major}</p>
              <p>{applicant.phone}</p>
              {applicant.fields.map((field, key) => {
                return <Field text={field} key={key} />
              })}
            </div>
            <div className="intro">
              {applicant.introduction}
            </div>
          </div>
          <div className="evaluation-container">
            {evaluators.map((evaluator, key) => {
              if (this.alreadyEvaluated(this.state.evaluations, evaluator)) {
                return <Evaluation evaluation={this.getEvaluationByEvaluator(this.state.evaluations, evaluator)} key={key} />
              } else {
                return <Evaluation evaluation={{ id: applicant._id, evaluator: evaluator }} key={key} />
              }
            })}
          </div>
        </div>
      )
    } else {
      return (
        <span>Select an Applicant</span>
      )
    }
  }
}

export default ApplicantDetailView;

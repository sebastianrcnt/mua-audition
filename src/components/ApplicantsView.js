import React from 'react';
import ApplicantRow from './ApplicantRow'

class ApplicantsView extends React.Component {
    render() {
      return (
        <div className="applicants-view">
          <table className="applicants-view">
            <thead>
              <tr className='nothover'>
                <th>아이디</th>
                <th>이름</th>
                <th>학과</th>
                <th>연락처</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {this.props.applicants.map((applicant) => {
                return <ApplicantRow key={applicant._id} applicant={applicant} />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  export default ApplicantsView;
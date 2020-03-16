import React from 'react';
import {Link} from 'react-router-dom'

class ApplicantRow extends React.Component {
    render() {
      const { applicant } = this.props
      return (
        <tr>
          <td>{applicant._id}</td>
          <td>{applicant.name}</td>
          <td>{applicant.major}</td>
          <td>{applicant.phone}</td>
          <td className='details-link'>
            <Link to={{
              pathname: `/applicant-details/${applicant._id}`,
              state: {
                fromNavigation: false,
                applicant
              }
            }}>상세보기</Link>
          </td>
        </tr>
      )
    }
  }

  export default ApplicantRow;
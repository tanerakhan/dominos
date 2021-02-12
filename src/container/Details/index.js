import React, { useEffect } from 'react'
import { connect } from "react-redux";
import DetailComp from '../../components/Details'
import Loader from '../../components/Loader'
import {getDetails} from "../../store/actions";

function Detail({ match, getDetails, details, pending }) {
    useEffect(() => {
        const {id} = match.params;
        getDetails(id)
    }, [])
    return (
        <div style={{ position: 'relative' }}>
            { pending ? <Loader /> : <DetailComp data={details} /> }
        </div>
    )
}

function mapStateToProps(state) {
    return {
      details: state.details,
      pending: state.pending,
      fail: state.fail
    };
  }

  export default connect(mapStateToProps, { getDetails })(Detail);
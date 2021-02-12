import React, {useEffect} from 'react'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { connect } from "react-redux";
import {getAll} from "../../store/actions";

function Home({getAll, pizza, pending}) {
        useEffect(() => {
            getAll();
        }, [])
        return (
            <div style={{ backgroundColor: '#f0f8ff', maxWidth: '1000px', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridGap: '1rem', padding: '20px', position: 'relative' }}>
                { pending ? <Loader /> : <Card items={pizza} /> }
            </div>
        )
}

function mapStateToProps(state) {
    return {
      pizza: state.success,
      pending: state.pending,
      fail: state.fail
    };
  }

export default connect(mapStateToProps, {getAll})(Home);
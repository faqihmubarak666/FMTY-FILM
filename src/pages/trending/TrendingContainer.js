import React, { Component } from "react";
import { getTrendingService, getDetailTrending } from "./ServiceTrending";
import ListTrending from "./ListTrending";
import { connect } from "react-redux";

class TrendingContainer extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getTrendingService().then((res) => {
      const result = res.data.results;
      this.props.GetTrending(result);
    });
  };

  detailTrending = (id) => {
    getDetailTrending(id).then((response) => {
      const result = response.data;
      this.props.GetDetailTrendingId(result);
    });
    this.props.Showbar(true);
  };

  render() {
    return (
      <div>
        <ListTrending
          dataTrending={this.props.dataTrending}
          detailTrending={this.detailTrending}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataTrending: state.rGetDataTrending.GetTrending.dataTrending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetTrending: (result) => dispatch({ type: "GET_TRENDING", data: result }),
    GetDetailTrendingId: (result) =>
      dispatch({ type: "GET_DETAIL_TRENDING", data: result }),
    GetTrailerTrendingId: (result) =>
      dispatch({ type: "GET_TRAILER_TRENDING", data: result }),
    Showbar: (result) => dispatch({ type: "SHOWBAR", data: result }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);

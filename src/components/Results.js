import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import queryString from 'query-string';
import { battle } from "../utils/api";
import { FaCompass, FaBriefcase, FaUserFriends, FaUsers, FaUser, FaCode } from "react-icons/fa";
import Card from "./Card";
import Loading from "./Loading";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";

function ProfileList({ profile }) {
  return (
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239,115,115)" size={22} />
        {profile.name}
      </li>
      {profile.location && (
        <li>
          <Tooltip text="User's Location">
            <FaCompass color="rgb(144,115,255)" size={22} />
            {profile.location}
          </Tooltip>
        </li>
      )}
      {profile.company && (
        <li>
          <Tooltip text="User's Company">
            <FaBriefcase color="rgb(144,115,255)" size={22} />
            {profile.company}
          </Tooltip>
        </li>
      )}
      <li>
        <FaUsers color="rgb(129,195,245)" size={22} />
        {profile.followers.toLocaleString()} Followers
      </li>
      <li>
        <FaUserFriends color="rgb(64,183,95)" size={22} />
        {profile.following.toLocaleString()} Following
      </li>
    </ul>
  );
}

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired
};
export default class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    // debugger;
    const { playerOne, playerTwo } = queryString.parse(window.location.search);

    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false
        });
      }).catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        });
      });
  }
  render() {
    const { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return (<p className="center-text error">{error}</p>);
    }

    return (
      <>
        <div className="grid space-around container-sm">
          <Card
            header={winner.score === loser.score ? 'Tie' : 'Winner'}
            subheader={`Score: ${winner.score.toLocaleString()}`}
            avatar={winner.profile.avatar_url}
            href={winner.profile.html_url}
            name={winner.profile.login}
          >
            <ProfileList profile={winner.profile} />
          </Card>
          <Card
            header={winner.score === loser.score ? 'Tie' : 'Loser'}
            subheader={`Score: ${loser.score.toLocaleString()}`}
            avatar={loser.profile.avatar_url}
            href={loser.profile.html_url}
            name={loser.profile.login}
          >
            <ProfileList profile={loser.profile} />
          </Card>
        </div >
        <Link
          className="btn dark-btn btn-space"
          to='/battle'
        >
          Reset
        </Link>
      </>
    );
  }
}

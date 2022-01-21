import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepo } from "../utils/api";

//function Component
function LanguagesNav({ selected, onUpdateLanguage }) {
  const programmingLanguages = ['All', 'Javascript', 'Ruby', 'Java', 'Python', 'CSS'];

  return (
    <ul className="flex-center">
      {programmingLanguages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: 'darkorange' } : null}
            onClick={() => onUpdateLanguage(language)}>{language}</button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};
export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      repos: null,
      error: null
    });

    fetchPopularRepo(selectedLanguage)
      .then((repos) => this.setState({
        repos,
        error: null
      }))
      .catch(() => {
        console.error('Error fetching Repos: ', error);
        this.setState({
          error: 'There was an error fetching the repositories'
        });
      });
  }


  isLoading() {
    const { repos, error } = this.state;
    return repos === null && error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <h3>LOADING</h3>}
        {error && <p>error</p>}
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </>
    );
  }
}
import React from "react";

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

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }

  render() {
    return (
      <>
        <LanguagesNav
          selected={this.state.selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
      </>
    );
  }
}
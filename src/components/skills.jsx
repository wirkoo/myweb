import React, { Component } from "react";

class Skills extends Component {
  state = {
    data: [
      { id: 1, name: "html5", icon: "fab fa-html5" },
      { id: 2, name: "css3", icon: "fab fa-css3" },
      { id: 3, name: "javascript", icon: "fab fa-js" },
      { id: 4, name: "react", icon: "fab fa-react" },
      { id: 5, name: "oop", icon: "fas fa-code" },
      { id: 6, name: "git", icon: "fas fa-code-branch" },
    ],
  };

  render() {
    return (
      <>
        <div className="skills">
          {this.state.data.map((skill) => (
            <div className="skill__container">
              <span class="skill__icon">
                <i className={skill.icon}></i>
              </span>
              <h2 className="skill__heading">{skill.name}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Skills;

import { FormEvent, useState } from "react";
import "./styles.css";

const SKILLS = [
  ".NET",
  "AWS",
  "Angular",
  "Azure",
  "C#",
  "CI/CD",
  "CSS",
  "Cybersecurity",
  "Django",
  "Docker",
  "Flask",
  "Git",
  "Google Cloud Platform",
  "GraphQL",
  "HTML",
  "Java",
  "JavaScript",
  "Jenkins",
  "Kubernetes",
  "MongoDB",
  "Node.js",
  "NoSQL",
  "Python",
  "React",
  "RESTful APIs",
  "SQL",
  "Spring Boot",
  "Terraform",
  "TypeScript",
  "Vue.js",
];

const TREND_SKILLS = ["AWS", "Docker", "Node.js", "React", "JavaScript"];
const SUGESTIONS = ["Python", "SQL", "Spring Boot", "TypeScript", "Vue.js"];

const SortableList = () => {
  
  const [selectedSkills, setSelectedSkills] = useState(new Array(5).fill(null));
  const [submitStatus, setSubmitStatus] = useState({
    status: 500,
    message: "Internal Error!",
  });


  function validate(e: FormEvent) {
    e.preventDefault();
    for (let i = 0; i < selectedSkills.length; i++) {
      if (selectedSkills[i] == null || selectedSkills[i] == undefined) {
        setSubmitStatus(() => {
          return {
            status: 400,
            message: "Por favor, preencha as 5 skills",
          };
        });
      } else {
        return {
          status: 200,
          message: "Suas Skills foram enviadas, muito obrigado!",
        };
      }
    }
  }


  function handleChange() {}


  return (
    <div className="sortable-list-wrapper">
      
      <h2 className="sortable-list-title">Select your top 5 tech Skills</h2>
      
      <div className="sortable-list-wrapper-inside">
        <form className="sortable-list-form" onSubmit={(e) => validate(e)}>
          <select
            className="sortable-list-option sortable-list-active"
            value={selectedSkills[0]}
            onChange={handleChange}
          >
            <option value="">Add Skill</option>
            <option value={TREND_SKILLS[0]}>{TREND_SKILLS[0]}</option>
            <option value={TREND_SKILLS[1]}>{TREND_SKILLS[1]}</option>
            <option value={TREND_SKILLS[2]}>{TREND_SKILLS[2]}</option>
            <option value={TREND_SKILLS[3]}>{TREND_SKILLS[3]}</option>
            <option value={TREND_SKILLS[4]}>{TREND_SKILLS[4]}</option>
            <input type="search" />
          </select>

          <select
            className="sortable-list-option"
            value={selectedSkills[1]}
            onChange={handleChange}
            disabled
          >
            <option value="">Add Skill</option>
            <option value={TREND_SKILLS[0]}>{TREND_SKILLS[0]}</option>
            <option value={TREND_SKILLS[1]}>{TREND_SKILLS[1]}</option>
            <option value={TREND_SKILLS[2]}>{TREND_SKILLS[2]}</option>
            <option value={TREND_SKILLS[3]}>{TREND_SKILLS[3]}</option>
            <option value={TREND_SKILLS[4]}>{TREND_SKILLS[4]}</option>
          </select>

          <select
            className="sortable-list-option"
            value={selectedSkills[2]}
            onChange={handleChange}
            disabled
          >
            <option value="">Add Skill</option>
            <option value={TREND_SKILLS[0]}>{TREND_SKILLS[0]}</option>
            <option value={TREND_SKILLS[1]}>{TREND_SKILLS[1]}</option>
            <option value={TREND_SKILLS[2]}>{TREND_SKILLS[2]}</option>
            <option value={TREND_SKILLS[3]}>{TREND_SKILLS[3]}</option>
            <option value={TREND_SKILLS[4]}>{TREND_SKILLS[4]}</option>
          </select>

          <select
            className="sortable-list-option"
            value={selectedSkills[3]}
            onChange={handleChange}
            disabled
          >
            <option value="">Add Skill</option>
            <option value={TREND_SKILLS[0]}>{TREND_SKILLS[0]}</option>
            <option value={TREND_SKILLS[1]}>{TREND_SKILLS[1]}</option>
            <option value={TREND_SKILLS[2]}>{TREND_SKILLS[2]}</option>
            <option value={TREND_SKILLS[3]}>{TREND_SKILLS[3]}</option>
            <option value={TREND_SKILLS[4]}>{TREND_SKILLS[4]}</option>
          </select>

          <select
            className="sortable-list-option"
            value={selectedSkills[4]}
            onChange={handleChange}
            disabled
          >
            <option value="">Add Skill</option>
            <option value={TREND_SKILLS[0]}>{TREND_SKILLS[0]}</option>
            <option value={TREND_SKILLS[1]}>{TREND_SKILLS[1]}</option>
            <option value={TREND_SKILLS[2]}>{TREND_SKILLS[2]}</option>
            <option value={TREND_SKILLS[3]}>{TREND_SKILLS[3]}</option>
            <option value={TREND_SKILLS[4]}>{TREND_SKILLS[4]}</option>
          </select>


        </form>
      </div>
      
    </div>
  );
};

export default SortableList;
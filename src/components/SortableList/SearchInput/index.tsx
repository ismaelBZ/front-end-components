import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";

const SKILLS_LIST = [
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

const SearchInput = ({isActive}: {isActive: boolean}) => {
    const [searchedSkill, setSearchedSkill] = useState<string | number | readonly string[] | undefined>("");
    const [displayOptions, setDisplayOptions] = useState(false);
    const [skills, setSkills] = useState(TREND_SKILLS);
    const [isSelected, setIsSelected] = useState(!isActive);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value;
    const newSkillList = SKILLS_LIST.filter((skill) => (skill.toLocaleUpperCase()).includes((search.toUpperCase())));
    setSearchedSkill(() => search);
    if (search) {
      setSkills(() => newSkillList);
    } else {
      setSkills(() => TREND_SKILLS);
    }
  }

  function handleSelection(option: string) {
    setSearchedSkill(() => option);
    setDisplayOptions(() => false);
    setIsSelected(() => true);
  }
    
    return (
        <>
            <div className="sortable-list-search-wrapper">
            <input 
            id="1"
            className={`sortable-list-search ${isSelected && "sortable-list-option-selected"}`}
            onChange={(e) => handleSearch(e)}
            onFocus={() => setDisplayOptions(() => true) }
            value={searchedSkill}
            placeholder="Add Skill"
            disabled={isSelected}
            />
            {isSelected || 
            <IoIosArrowDown 
                className="sortable-list-search-icon"
                onClick={() => displayOptions ? setDisplayOptions(() => false) : setDisplayOptions(() => true)} 
            />
            }
            {isSelected && 
            <IoIosClose 
                className="sortable-list-search-icon sortable-list-search-close"
                onClick={() => setIsSelected(() => false)}
            />
            }
            </div>
            { displayOptions &&
            <ul className="sortable-list-options"> {
            skills.map((skill) => {
                return (
                <li 
                className="sortable-list-options-item" 
                onClick={() => handleSelection(skill)}>{skill}</li>
                );
            })
            } </ul>
            }
        </>
    );
}

export {SearchInput}

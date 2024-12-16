import {FormEvent, useState } from "react";
import { SearchInput } from "./SearchInput";
import "./styles.css";

const SortableList = () => {
  const [active, setActive] = useState(new Array(5).fill(false))
  // const [submitStatus, setSubmitStatus] = useState({
  //   status: 500,
  //   message: "Internal Error!",
  // });
  // function validate(e: FormEvent) {
  //   e.preventDefault();
  //   for (let i = 0; i < selectedSkills.length; i++) {
  //     if (selectedSkills[i] == null || selectedSkills[i] == undefined) {
  //       setSubmitStatus(() => {
  //         return {
  //           status: 400,
  //           message: "Por favor, preencha as 5 skills",
  //         };
  //       });
  //     } else {
  //       return {
  //         status: 200,
  //         message: "Suas Skills foram enviadas, muito obrigado!",
  //       };
  //     }
  //   }
  // }

  return (
    <div className="sortable-list-wrapper">
      
      <h2 className="sortable-list-title">Select your top 5 tech Skills</h2>
      
      <div className="sortable-list-wrapper-inside">
        <form className="sortable-list-form">
          { active.map((e,i) => {
              return (<SearchInput key={i} isActive={active[i]}/> 
          )})}
        </form>
      </div>
      
    </div>
  );
};

export default SortableList;

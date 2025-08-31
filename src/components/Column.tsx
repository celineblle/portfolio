import { useState } from "react";
import Card from "./Card";
import { allCVSection } from "./elements/cvDetails";
import { allStacks } from "./elements/stacksAndProjets";
import "./style/column.css";

function Column({ arrayKeyId }: { arrayKeyId: string }) {
  const arrayColumn = arrayKeyId === "stack" ? allStacks : allCVSection;

  const [openContent, setOpenContent] = useState<string>(arrayColumn[0].id);

  function handleClickOpenTab(id: string) {
    setOpenContent(id);
  }

  return (
    <div className="columnComponent">
      <h2>Développeuse full stack Java, Angular, React</h2>
      <div className="columnContent">
        {arrayColumn.map((subject) => (
          <ul
            key={subject.id}
            className={
              openContent === subject.id ? "openColumn" : "closeColumn"
            }
            onClick={() => handleClickOpenTab(subject.id)}
          >
            <h3
              className={
                openContent === subject.id
                  ? "openColumnTitle"
                  : "closeColumnTitle"
              }
            >
              {subject.name}
            </h3>
            <div
              className={openContent === subject.id ? "openCard" : "closeCard"}
            >
              <Card subject={subject} />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Column;

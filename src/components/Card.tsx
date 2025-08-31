import { type Stack } from "./elements/stacksAndProjets";
import { type Section } from "./elements/cvDetails";
import "./style/card.css";

function Card({ subject }: { subject: Stack | Section }) {
  function getTheSubjetArray() {
    const currentSubject = subject;
    if ("projects" in currentSubject) {
      return currentSubject.projects;
    } else {
      return currentSubject.content;
    }
  }

  const currentSubjectArray = getTheSubjetArray();

  return (
    <>
      {currentSubjectArray.map((card) => (
        <ul key={card.id}>
          <h4>{card.name}</h4>
          {typeof card.description === "string" ? (
            <li>{card.description}</li>
          ) : (
            <ul>
              {card.description.map((text, i) => (
                <li key={card.id + i}>{text}</li>
              ))}
            </ul>
          )}
          {"link" in card && <button className="projectButton">
            Lien Github
            <div className="hoverEffect">
            <a href={card.link} target="_blank"></a>
            </div>
            </button>}
        </ul>
      ))}
    </>
  );
}

export default Card;

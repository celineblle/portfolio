import { type Stack} from "./elements/stacksAndProjets";
import { type Section } from "./elements/cvDetails";

function Card({subject} : {subject: Stack | Section}) {
  
function getTheSubjetArray() {
  const currentSubject = subject;
  if("projects" in currentSubject) {
    return currentSubject.projects;
  } else {
    return currentSubject.content;
  }
}

const currentSubjectArray = getTheSubjetArray();


  return (
    <div>
      {currentSubjectArray.map((card) => (
        <ul key={card.id}>
        <h3 >{card.name}</h3>
        {typeof card.description === "string" ?
      <li>
        {card.description}
      </li>  :
      <ul>
        {card.description.map((text, i) => (
          <li key={card.id + i} >{text}</li>
        ))}
      </ul>
      }
        </ul>
      ))}
    </div>
  )

  
}

export default Card;

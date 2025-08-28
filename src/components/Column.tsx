import Card from "./Card";
import { allCVSection } from "./elements/cvDetails";
import { allStacks } from "./elements/stacksAndProjets";

function Column({arrayKeyId} : {arrayKeyId: string}) {

  const arrayColumn = arrayKeyId === "stack" ? allStacks : allCVSection;


  return <div>
    <h2>Développeuse full stack Java, Angular, React</h2>
    {arrayColumn.map((subject) => (
      <ul key={subject.id}>
        <li>{subject.name}</li>
        <Card subject={subject}/>
      </ul>
    ))}
  </div>;
}

export default Column;

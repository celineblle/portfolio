import { allStacks } from "./elements/stacksAndProjets";

function Column() {



  return <div>
    <h2>Développeuse full stack Java, Angular, React</h2>
    {allStacks.map((stack) => (
      <ul>
        <li>{stack.name}</li>
        {stack.projects.map((projet) => (
          <ul>
            <li>
              {projet.name}
            </li>
            {projet.description.map((description) => (
              <li>
                {description}
              </li>
            ))}
          </ul>
        ))}
      </ul>
    ))}
  </div>;
}

export default Column;

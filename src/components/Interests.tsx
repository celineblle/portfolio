import { allInterests, moviesRecommandations, booksRecommandation } from "./elements/interests";

function Interests() {
  return <div>
    <h2>Interets</h2>
    <ul>
    {allInterests.map((interest) => (
      <li key={interest.id}>
        {interest.name}
      </li>
    ))}
</ul>    
<ul>
  {moviesRecommandations.map((movie) => (
    <li key={movie.id}>
      {movie.name}
    </li>
  ))}
</ul>
<ul>
  {booksRecommandation.map((book) => (
    <li key={book.id}>
      {book.name}
    </li>
  ))}
</ul>

  </div>;
}

export default Interests;

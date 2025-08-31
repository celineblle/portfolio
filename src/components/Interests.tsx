import {
  allInterests,
  moviesRecommandations,
  booksRecommandation,
} from "./elements/interests";
import "./style/interests.css";

function Interests() {
  return (
    <div id="interestsComponent">
      <h2 className="interestsText" id="interestsTitle">
        Interets
      </h2>

      <div className="interestDefilant">
        <div>
          <ul className="interestsCarousel" id="allInterest">
            {allInterests.map((interest) => (
              <li key={interest.id} className="interestsText">
                {interest.name} &#x2022;
              </li>
            ))}
            {allInterests.map((interest) => (
              <li key={interest.id} className="interestsText">
                {interest.name} &#x2022;
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="interestDefilant">
        <div>
          <ul className="interestsCarousel" id="moviesRecommandation">
            {moviesRecommandations.map((movie) => (
              <li key={movie.id} className="interestsText">
                {movie.name} &#x2022;
              </li>
            ))}
            {moviesRecommandations.map((movie) => (
              <li key={movie.id} className="interestsText">
                {movie.name} &#x2022;
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="interestDefilant">
        <div>
          <ul className="interestsCarousel" id="booksRecommandation">
            {booksRecommandation.map((book) => (
              <li key={book.id} className="interestsText">
                {book.name} &#x2022;
              </li>
            ))}
            {booksRecommandation.map((book) => (
              <li key={book.id} className="interestsText">
                {book.name} &#x2022;
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests;

import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return countries.map((country) => {
    let a2code = country.alpha2Code.toLowerCase();
    // let style ={max-height: '90vh', overflow: "scroll"};
    return (
      <div key={country.name} className="col-5 list-group">
        <Link className="list-group-item list-group-item-action" to={'/details/' + country.alpha3Code}>{country.alpha3Code}</Link>
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${a2code}.png`}
            alt="flag"
          />
        </div>
      </div>
    );
  });
}
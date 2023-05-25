import { useParams } from 'react-router-dom';
import countries from '../countries.json';

export default function CuntryDetrails() {
  const { alpha3Code } = useParams();
  const currentCountry = countries.find(
    (country) => country.alpha3Code === alpha3Code
  );
  let a2code = currentCountry.alpha2Code.toLowerCase();

  return (
    <div>
      <h1>{currentCountry.name.common}</h1>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${a2code}.png`}
          alt="flag"
        />
      </div>
      <p>{currentCountry.capital}</p>
    </div>
  );
}

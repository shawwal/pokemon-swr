import fetcher from "../lib/fetcher";
import useSWR from "swr";

function PokemonShort({ name }) {
  const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher);

  return (
    <div className="my-5 p-2 w-1/3">
      <article className="shadow p-5 relative">
        <h2 className="font-bold text-xl capitalize">{name}</h2>
        {data ? (
          <>
            <div className="absolute top-0 right-0">
              <img src={data.sprites.front_default} />
            </div>
            <ul>
              <li>
                <strong>Weight</strong>: {data.weight}
              </li>
              <li>
                <strong>Height</strong>: {data.height}
              </li>
            </ul>
            <br />
            <h3 className="font-bold text-lg">Stats</h3>
            <ul className="flex justify-start items-baseline flex-wrap">
              {data.stats.map(stat => (
                <li key={stat.stat.name} className="w-3/6">
                  <strong className="capitalize">{stat.stat.name}</strong>:{" "}
                  {stat.base_stat}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="font-bold text-l capitalize">Loading {name}...</p>
        )}
      </article>
    </div>
  );
}

export default PokemonShort;

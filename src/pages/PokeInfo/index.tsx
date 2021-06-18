import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { apiClient } from "../../services/api";
import { Container } from './style';

type PokeParams = {
    id: string;
};

type TypePokemon = {
    type: {
        name: string;
    };
};

type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    };
};

type Sprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
};

type Abilities = {
    ability: {
        name: string;
    };
};

type PokemonInfo = {
    base_experience: number;
    types: Array<TypePokemon>;
    id: number;
    height: number;
    weight: string;
    name: string;
    stats: Array<Stat>;
    sprites: Sprites;
    abilities: Array<Abilities>;
};

export const PokeInfo = () => {
    const { params } = useRouteMatch<PokeParams>();
    const [pokemon, setPokemon] = useState<PokemonInfo>();

    const getPokeInfo = useCallback(async () => {
        const response = await apiClient.get(`/pokemon/${params.id}`);
        setPokemon(response.data);
        console.log(response.data);
    }, [params.id]);

    useEffect(() => {
        getPokeInfo();
    }, [getPokeInfo]);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <Container>
                <section>
                    <aside>
                        <img src={pokemon?.sprites.front_default} alt="" />
                        <h1>{pokemon?.name}</h1>
                        <h1>Pokémon Nº{pokemon?.id}</h1>
                    </aside>
                    <div>
                        <p>Base EXP: {pokemon?.base_experience}</p>
                        <section>
                            <h2>Base Stats</h2>
                            {pokemon?.stats.map(stat => (
                                <h3>{stat.stat.name}: {stat.base_stat}</h3>
                            ))}
                        </section>
                        <main className="type-container" >
                            <h1>Height: {pokemon?.height} kg</h1>
                            <h1>Weight: {pokemon?.weight} cm</h1>
                            <h1>Types:</h1>
                            {pokemon?.types.length === 1 ? <h1>{pokemon.types[0].type.name}</h1> :
                                pokemon?.types.map(type => (
                                    <h2 key={type.type.name}>{type.type.name}</h2>
                                ))
                            }
                        </main>
                    </div>
                </section>
            </Container>
        </div>
    );
};
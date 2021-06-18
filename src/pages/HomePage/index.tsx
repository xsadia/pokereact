import { FormEvent, useEffect } from 'react';
import { useState } from 'react';
import { apiClient } from '../../services/api';
import { Sidebar } from '../../components/Sidebar';
import { Container } from './style';
import { FiSearch } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import pokeBallImg from '../../assets/pokeball.png';

type Pokemon = {
    name: string;
};

export const HomePage = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [search, setSearch] = useState('');

    const history = useHistory();

    async function getHomePagePokemons() {
        const response = await apiClient.get('pokemon?limit=10');

        setPokemons(response.data.results);
    }

    function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        history.push(`/info/${search}`);
    }

    useEffect(() => {
        getHomePagePokemons();
    }, []);

    return (
        <div style={{ display: 'flex' }} >
            <Sidebar />
            <Container>
                <header>
                    <form onSubmit={handleOnSubmit}>
                        <input onChange={e => setSearch(e.target.value)} placeholder="search" type="text" />
                        <button type="submit" ><FiSearch size={20} /></button>
                    </form>
                </header>
                <section>
                    {pokemons.map(pokemon => (
                        <div key={pokemon.name} >
                            <Link to={`/info/${pokemon.name}`} >
                                <h1>{pokemon.name}</h1>
                            </Link>
                            <img src={pokeBallImg} alt="imagem de uma poke bola" />
                        </div>
                    ))}
                </section>

            </Container>
        </div >
    );
};
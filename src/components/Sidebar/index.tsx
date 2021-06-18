import { Container } from './style';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

export const Sidebar = () => {
    return (
        <Container>
            <a href="/"><img src={logoImg} alt="Logo do pokemon" /></a>
            <ul>
                <li>
                    <h3><a href="/#">Pokémons</a></h3>
                </li>
                <li>
                    <h3><a href="/#">Types</a></h3>
                </li>
                <li>
                    <h3><a href="/#">Abilities</a></h3>
                </li>
            </ul>
            <footer>
                <div>
                    <a href="https://github.com/xsadia"><FiGithub size={20} /></a>
                    <a href="https://www.linkedin.com/in/felipe-arthur-s-b45a5b196/"><FiLinkedin size={20} /></a>
                    <a href="https://twitter.com/felps11"><FiTwitter size={20} /></a>
                </div>
            </footer>
        </Container>
    );
};
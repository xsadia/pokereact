import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { PokeInfo } from '../pages/PokeInfo';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/info/:id" exact component={PokeInfo} />
        </Switch>
    );
};
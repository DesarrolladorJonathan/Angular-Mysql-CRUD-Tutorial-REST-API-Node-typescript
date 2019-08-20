import {Router} from 'express';
import gamesController, {} from '../controllers/gamesController';

class GameRoutes{

    public router : Router= Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',gamesController.index)
    }
}
const gamesRautes = new GameRoutes();
export default gamesRautes.router;
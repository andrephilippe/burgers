import history from './history';

const redirectMiddleware = store => next => action => {
    if(!action){
        return;
    }
    if (action.redirect != null && action.redirect !== false) {
        history.push(action.redirect);
    }
    next(action);
}

export default redirectMiddleware
import AsyncStorage from "@react-native-async-storage/async-storage";

// buscar os filmes salvos
export async function getMoviesSave(key){
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];
    
    return moviesSave;
}


// salvar um novo filme
export async function saveMovie(key, newMovie){
    let moviesStored = await getMoviesSave(key);

    // se tiver algum filme salvo com esse mesmo id / ou duplicado precisa ignorar 
    const hasMovie = moviesStored.some( item => item.id === newMovie.id);

    if(hasMovie){
        console.log("esse filme já existe na sua lista")
        return;
    }

    moviesStored.push(newMovie);
    
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("FILME SALVO COM SUCESSO!");

}

// deletar algum filme em especifico
export async function deleteMovie(id){
    let moviesStored = await getMoviesSave('@MRatings');
    let myMovies = moviesStored.filter( item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@MRatings', JSON.stringify(myMovies));
    console.log("Filme DELETADO COM SUCESSO!");
    return myMovies;

}
// filtrar se o filme está salvo ou não

export async function hasMovie(movie){
    let moviesStored = await getMoviesSave('@MRatings');
    const hasMovie = moviesStored.find( item => item.id === movie.id )

    if (hasMovie){
        return true;
    }

    return false;
}
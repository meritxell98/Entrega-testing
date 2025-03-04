// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((value) => value.director);

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(movie => movie.director === director)

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  directorMovies = getMoviesFromDirector(array, director)

  let moviesAverage = directorMovies.reduce((total, movie) => total + movie.score,0);

  let average = moviesAverage / directorMovies.length;

  return Number(average.toFixed(2))

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const onlyTitles = array.map((value)=> value.title)

  const sortedAlphabetically = onlyTitles.sort((first, second) =>{
    if (first > second) {
      return 1
    }else  if (first < second){
      return -1
    }else {
      return 0
    }
  })
  return sortedAlphabetically.slice(0,20)

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedbyYear = array.toSorted((first, second) => {

    if(first.year > second.year){
      return 1
    } else if(first.year < second.year){
      return -1
    } else {
      return first.title.localeCompare(second.title);
    }
  })

  return sortedbyYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesByCategory = array.filter(movie => movie.genre.includes(category))

  let catergoryAverage = moviesByCategory.reduce((total, movie) => total + movie.score,0);

  let average = catergoryAverage/ moviesAverageByCategory.length

  return Number(average.toFixed(2))
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}



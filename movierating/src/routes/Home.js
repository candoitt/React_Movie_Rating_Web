import React from 'react';
import axios from 'axios';
import Movie from '../components/mov';
import './Home.css'



class Home extends React.Component {
 
  state = { 
    isLoading : true,
    movie: [],
  }
 /*async -> 자바스크립트에게 getMovies()함수는 시간이 필요하고
   await -> axios.get()의 실행을 기다려 달라고 말하는 것
   https://ko.javascript.info/async-await 참고
Async (비동기): "Async"는 "비동기"라고 번역됩니다.
이 용어는 작업이 병렬로 실행되며, 결과가 동기적으로 반환되지 않을 수 있다는 개념을 나타냅니다.
비동기 코드는 일반적으로 I/O 작업, 네트워크 요청 또는 시간이 오래 걸리는 작업과 관련이 있으며, 
이러한 작업을 블로킹하지 않고 다른 작업을 계속할 수 있도록 합니다.

Await (대기): "Await"는 "대기" 또는 "기다리기"를 의미합니다. 
이 용어는 주로 비동기 함수 내에서 사용되며, 비동기 작업이 완료되기를 기다린 다음 결과를 처리하는 데
사용됩니다. "await" 키워드는 비동기 작업이 완료될 때까지 현재 스레드를 차단하지 않고 다른 작업을 수행할 수 있도록 합니다.

Promise (약속): "Promise"는 "약속" 또는 "약속된 객체"로 번역됩니다.
이 용어는 비동기 작업의 결과를 나타내는 객체를 나타냅니다.
Promise"는 작업이 성공적으로 완료되었는지 또는 실패했는지를 나타내며,
비동기 작업의 상태 및 결과를 추적하는 데 사용됩니다.
"Promise"는 대부분의 현대적인 비동기 프로그래밍 언어와 라이브러리에서 사용됩니다.

*/

  getMovies = async () => {
    const { 
      data : {
        data:{movies},
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading:false});
    console.log(movies);
  };

   /* 
   movies 를 함수명으로 두었을 때, movies.data.data.movies
  */
  componentDidMount(){
     this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state
    return( 
      <section className ="container">
      {isLoading ? (
      <div className = "loader">
        <span className = "loader__text">Loading</span>
      </div>) 
      : (
      
      <div className = "movies" >
        {movies.map((movie) => (   
           <Movie    
                  key = {movie.id}                
                  id = {movie.id} 
                  year = {movie.year}                   
                  title = {movie.title} 
                  summary = {movie.summary} 
                  poster = {movie.medium_cover_image}  
                  genres = {movie.genres}
            />
          ))}
          </div>
        )}
      </section>

          );
        }
      }

export default Home;

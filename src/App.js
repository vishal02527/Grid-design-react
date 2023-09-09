import Topnav from './components/topnavbar/topnav'
import LatestPosts from './components/latestposts/latestposts';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';
import maincss from './App.module.css'

const App = () => {
  return ( 
    <div>
      <div className={maincss.top}><Topnav /></div>
      <div className={maincss.main}>
        <div className={maincss.post}><LatestPosts /></div>
        <div className={maincss.cards}><Cards /></div>
      </div>
      <div className={maincss.footer}><Footer /></div>
    </div>
   );
}
 
export default App;
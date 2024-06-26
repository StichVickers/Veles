import './Home.css';
import { Link } from 'react-router-dom';
import Radio from './radio.jsx';
function Home() {
    return (
        <div className='HomePage'>
            <script src="//code.jivo.ru/widget/K7gjrm7ddM" async></script>
            <div className='MainTab'>
                <div>
                    <div className='MainText'>
                        <div id='Main_h'>
                            <h1>Система автополива</h1>
                            <h1 id='MainText_gold'>ПОД КЛЮЧ</h1>
                            <h1>с гарантией</h1>
                        </div>
                    </div>
            </div> 
        </div>
        <br></br>
        <Radio></Radio>
    </div>
    );
}
 
export default Home;

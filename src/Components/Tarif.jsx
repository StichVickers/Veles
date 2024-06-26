import './Tarif.css';
function Tarif(){
 return(
     <div className='Tarif'>
        <h2>Тарифная сетка</h2>
        <h3>Тарифы для ваших решений</h3>
        <div className='Tarif_text'>
            <h4 className='Tarif_h'>
                Кв.М
            </h4>
            <ul>
                <li>За 1 кв.М</li>
                <li>100</li>
                <li>Руб.</li>
            </ul>
            <h4 className='Tarif_h'>
                Виды Систем
            </h4>
            <ul>
                <li>Электронная </li>
                <li>800</li>
                <li>Руб.</li>
                <li>Механическая</li>
                <li>650</li>
                <li>Руб.</li>
            </ul>
            <h4 className='Tarif_h'>
                Типы грунта
            </h4>
            <ul>
                <li>Земля</li>
                <li>100</li>
                <li>Руб.</li>
                <li>Щебень</li>
                <li>250</li>
                <li>Руб.</li>
                <li>Гравий</li>
                <li>320</li>
                <li>Руб.</li>
            </ul>
            <h4 className='Tarif_h'>
                Цели установки
            </h4>
            <ul>
                    <li>Для дачи</li>
                    <li>200</li>
                    <li>Руб.</li>
                    <li>Для парков</li>
                    <li>250</li>
                    <li>Руб.</li>
                    <li>Для гольфа</li>
                    <li>200</li>
                    <li>Руб.</li>
                    <li>Для футбольных полей</li>
                    <li>380</li>
                    <li>Руб.</li>
                    <li>Для теплиц</li>
                    <li>360</li>
                    <li>Руб.</li>
                    <li>Для газона</li>
                    <li>360</li>
                    <li>Руб.</li>
                    <li>Для сада</li>
                    <li>270</li>
                    <li>Руб.</li>
                    <li>Для зимнего сада</li>
                    <li>170</li>
                    <li>Руб.</li>
                    <li>Для муниципальных объектов</li>
                    <li>260</li>
                    <li>Руб.</li>
            </ul>
        </div>
        
     </div>
 )
}
export default Tarif
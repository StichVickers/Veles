import './Calculator.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function Calc() {
    const [area, setArea] = useState(0);
    const [systemType, setSystemType] = useState('');
    const [soilType, setSoilType] = useState('');
    const [purpose, setPurpose] = useState('');
    const [waterSupply, setWaterSupply] = useState('');
    const [additionalServices, setAdditionalServices] = useState('');
    const [downloadCost, setDownloadCost] = useState(null);
    const [dopCost, setDopCost] = useState(null);
    const [totalCost, setTotalCost] = useState(null);

      const navigate = useNavigate();
    
    const handleCalculate = () => {
      const parseValue = (str) => {
        const parts = str.split(', ');
        return parseInt(parts[1], 10);
      };
  
      const systemCost = systemType ? parseValue(systemType) : 0;
      const soilCost = soilType ? parseValue(soilType) : 0;
      const waterSupplyCost = waterSupply ? parseValue(waterSupply) : 0;
      const additionalServiceCost = additionalServices ? parseValue(additionalServices) : 0;
      const download = (parseInt(area * 100) + (systemCost + soilCost)) + waterSupplyCost;
      setDownloadCost(download);
      const dop = additionalServiceCost;
      setDopCost(dop)
      const total = download + dop;
      setTotalCost(total);

const handleSave = () => {
    navigate('/profile', { state: { totalCost} });
  };

        
    };
    return (
        <div className='Calc'>
 <div className='Calc_Main'>
      <h3>Калькулятор</h3>
      <p id='p_main'>Калькулятор для вашего решения</p>
      <div className='Calc_Main_1'>
        <div className='types'>
          <p>Кв.М</p>
          <input 
            type='number' 
            placeholder='0' 
            value={area} 
            onChange={(e) => setArea(e.target.value)} 
          />
        </div>
        <div className='types'>
          <p>Тип системы</p>
          <select value={systemType} onChange={(e) => setSystemType(e.target.value)}>
            <option disabled value=''>Тип Системы</option>
            <option value='Дождевой, 700'>Дождевой, 700 руб</option>
            <option value='Капельный прикорневой, 850'>Капельный прикорневой, 850 руб</option>
            <option value='Подземный, 900'>Подземный, 900 руб</option>
            <option value='Всплывающие спринклеры, 1400'>Всплывающие спринклеры, 1400 руб</option>
          </select>
        </div>
        <div className='types'>
          <p>Тип грунта</p>
          <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
            <option disabled value=''>Тип Грунта</option>
            <option value='Глинистая, 700'>Глинистая, 700 руб</option>
            <option value='Песчаная, 0'>Песчаная, 0 руб</option>
          </select>
        </div>
        <div className='types'>
          <p>Для каких целей</p>
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option disabled value=''>Цели</option>
            <option value='Для дачи'>Для дачи</option>
            <option value='Для парков'>Для парков</option>
            <option value='Для гольфа'>Для гольфа</option>
            <option value='Для футбольных полей'>Для футбольных полей</option>
            <option value='Для теплиц'>Для теплиц</option>
            <option value='Для газона'>Для газона</option>
            <option value='Для сада'>Для сада</option>
            <option value='Для зимнего сада'>Для зимнего сада</option>
            <option value='Для муниципальных объектов'>Для муниципальных объектов</option>
          </select>
        </div>
        <div className='types'>
          <p>Тип подключения к водоснабжению</p>
          <select value={waterSupply} onChange={(e) => setWaterSupply(e.target.value)}>
            <option disabled value=''>Тип подключения</option>
            <option value='Центральная водопроводная сеть, 300'>Центральная водопроводная сеть, 300 руб</option>
            <option value='Естественный водоем, 1000'>Естественный водоем, 1000 руб</option>
            <option value='Колодец, 1200'>Колодец, 1200 руб</option>
          </select>
        </div>
        <div className='types'>
          <p>Дополнительные услуги</p>
          <select value={additionalServices} onChange={(e) => setAdditionalServices(e.target.value)}>
            <option disabled value=''>Дополнительные услуги</option>
            <option value='Расчистка территории, 1000'>Расчистка территории, 1000 руб</option>
            <option value='Выравневание ландшафта, 2000'>Выравневание ландшафта, 2000 руб</option>
            <option value='Ничего, 0'>Ничего, 0 руб</option>
          </select>
        </div>
        <button onClick={handleCalculate}>Рассчитать</button>
      </div>
    </div>
            <div className='Calc_Second'>
                {downloadCost !== null && (
                <div className='Calc_Second_types'>
                <h3>Установка</h3>
                <p>{downloadCost} руб.</p>
                </div>
                )}
                {dopCost !== null && (
                <div className='Calc_Second_types'>
                <h3>Дополнительные услуги</h3>
                <p>{dopCost} руб.</p>
                </div>
                )}
                {totalCost !== null && (
                <div className='Calc_Second_types'>
                <h3>Суммарная стоимость услуги</h3>
                <p>{totalCost} руб.</p>
                </div>
                )}
                <button onClick={handleSave}>Сохранить</button>
            </div>
        </div>

    );
}
 
export default Calc;

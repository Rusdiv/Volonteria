import React from 'react';

import Vacancia from '../../components/vacancies/Vacancia';

import styles from '../../components/vacancies/vacancies.module.scss';

export default function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <Vacancia
        text="В обязанности входят: внутрискладская переработка грузов ( разбор
        заказов по маршрутам доставки), а так же сортировка, укладка, перенос
        товара и т.д."
        title="Сборщик-грузчик"
        advantages={['Без опыта', 'Полная занятость', 'Сменный график']}
        price="от 45 000 руб"
      />
      <Vacancia
        text="В фитнес бар 'Мандарин' требуется бармен. Нижнекамск, пр. Шинников, 37 Orange Fitness. Тел. +7 (913) 772-16-07 Артём"
        title="Бармен"
        advantages={['Без опыта', 'Полная занятость', 'Сменный график']}
        price="от 22 000 руб"
      />
    </div>
  );
}

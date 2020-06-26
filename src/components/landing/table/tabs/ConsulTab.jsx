import React from 'react'

const ConsulTab = () => (
  <tbody>
    <tr>
      <th colSpan={2}>Качество обработки обращений</th>
    </tr>
    <tr>
      <td>0 ошибок, 0 предупреждений</td>
      <td>12 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 1-5 предупреждений</td>
      <td>7 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 6-7 предупреждений</td>
      <td>5 лайков</td>
    </tr>
    <tr>
      <td>Все остальные случаи</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Занятость</th>
    </tr>
    <tr>
      <td>85% и более</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>75-85%</td>
      <td>3 лайка</td>
    </tr>
    <tr>
      <td>Менее 75%</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Must have</th>
    </tr>
    <tr>
      <td>Регистрация 90% и выше</td>
      <td>2 лайка</td>
    </tr>
    <tr>
      <td>Уведомления 90% и выше</td>
      <td>2 лайка</td>
    </tr>
    <tr>
      <th colSpan={2}>Благодарности</th>
    </tr>
    <tr>
      <td>Каждая благодарность</td>
      <td>8 лайков</td>
    </tr>
    <tr>
      <td>Нет благодарности</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Прочее</th>
    </tr>
    <tr>
      <td>Бонус от супервизора</td>
      <td>1-30 лайков</td>
    </tr>
  </tbody>
)

export default ConsulTab

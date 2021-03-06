import React from 'react'

const VipTab = () => (
  <tbody>
    <tr>
      <th colSpan={2}>Качество прослушки</th>
    </tr>
    <tr>
      <td>0 ошибок, 0 предупреждений</td>
      <td>9 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 1-3 предупреждений</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 4-5 предупреждений</td>
      <td>4 лайка</td>
    </tr>
    <tr>
      <td>Все остальные случаи</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>% регистраций звонков</th>
    </tr>
    <tr>
      <td>95% и более</td>
      <td>4 лайка</td>
    </tr>
    <tr>
      <td>Менее 95%</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Качество чатов</th>
    </tr>
    <tr>
      <td>0 ошибок, 0 предупреждений </td>
      <td>9 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 1-6 предупреждений</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 7-8 предупреждений</td>
      <td>4 лайка</td>
    </tr>
    <tr>
      <td>Все остальные случаи</td>
      <td>0 лайков</td>
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

export default VipTab;

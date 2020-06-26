import React from 'react'

const MailTab = () => (
  <tbody>
    <tr>
      <th colSpan={2}>Качество чатов</th>
    </tr>
    <tr>
      <td>0 ошибок, 0 предупреждений</td>
      <td>12 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 1-7 предупреждений</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 8-9 предупреждений</td>
      <td>4 лайка</td>
    </tr>
    <tr>
      <td>Все остальные случаи</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Норма контактов</th>
    </tr>
    <tr>
      <td>Выполнена</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>Не выполнена</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>Must Have</th>
    </tr>
    <tr>
      <td>Уведомления 90% и выше</td>
      <td>4 лайка</td>
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

export default MailTab

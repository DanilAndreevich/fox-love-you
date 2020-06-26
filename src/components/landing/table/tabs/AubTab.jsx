import React from 'react'

const AubTab = () => (
  <tbody>
    <tr>
      <th colSpan={2}>Качество прослушки</th>
      
    </tr>
    <tr>
      <td>0 ошибок, менее 8 предупреждений</td>
      <td>12 лайков</td>
    </tr>
    <tr>
      <td>0 ошибок, 9-16 предупреждений</td>
      <td>4 лайка</td>
    </tr>
    <tr>
      <td>Все остальные случаи</td>
      <td>0 лайков</td>
    </tr>
    <tr>
      <th colSpan={2}>% регистрации обращений</th>
      
    </tr>
    <tr>
      <td>97% и более</td>
      <td>6 лайков</td>
    </tr>
    <tr>
      <td>Менее 97%</td>
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

export default AubTab;

const additionReasons = [
  ['thanks', 'Благодарности'],
  ['supervisorBonus', 'Бонус от супервизора'],
  ['other', 'Другое']
]

const subtractionReasons = [
  ['buySouvenir', 'Покупка сувенирки'],
  ['buyRelax', 'Покупка график'],
  ['buyCalliderBonus', 'Покупка плюшек на коллайдере'],
  ['buyEquipment', 'Покупка оргтехники'],
  ['buyOther', 'Другое']
]

const automaticReasons = [
  ['callQuality', 'Качество звонковой визии'],
  ['callRegistration', 'Регистрация звонков'],
  ['callInforming', 'Уведомления на звонке'],
  ['mailQuality', 'Качество почтовой визии'],
  ['mailInforming', 'Уведомления на почте']
]

const manualReasonNames = additionReasons
  .concat(subtractionReasons)
  .map(([name]) => name)

const reasons = new Map(additionReasons.concat(subtractionReasons).concat(automaticReasons))

function getReasonName(reason) {
  return reasons.get(reason)
}

export { additionReasons, subtractionReasons, manualReasonNames, getReasonName }

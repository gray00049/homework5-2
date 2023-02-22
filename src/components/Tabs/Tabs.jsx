// Принимает в props элементы для tab`ов. Проходит по ним циклом и выводит в шаблон. Так же хранит состояние активного tab`а

export default function Tabs() {
  return (
    <div>
      <div>
        <TabTitle />
        <TabTitle />
        <TabTitle />
        <DateTime />
      </div>
      <TabItems />
    </div>

  )
}
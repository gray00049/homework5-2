// Создает шапку над полем для ввода поиска

export default function Header() {
  return (
    <div>
      <div>
        <Tabs />
        <Course />
      </div>
      <AdsBlock />
    </div>
  )
}
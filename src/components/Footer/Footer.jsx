// Выводит блок под строкой поиска

export default function Footer() {
  return (
    <div>
      <Banner />
      <div>
        <div>
          <Section>
            <Weather />
          </Section>

          <Section>
            <SectionLink />
            <SectionLink />
            <SectionLink />
          </Section>
        </div>

        <div>
          <Section>
            <SectionLink />
          </Section>

          <Section>
            <SectionLink />
            <SectionLink />
            <SectionLink />
          </Section>
        </div>

        <div>
          <Section>
            <SectionLink />
            <SectionLink />
            <SectionLink />
          </Section>
        </div>
      </div>
    </div>
  )
}
import { Highlight } from "@components/Highlight"
import { Container } from "./styles"

import { Header } from "@components/Header"

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  )
}

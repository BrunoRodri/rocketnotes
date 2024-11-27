import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/Noteitem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links Úteis" >
            <NoteItem value="https://rocketseat.com" />
            <NoteItem placeholder="Novo link" isNew/>
          </Section>
        </Form>
      </main>
    </Container>
  );
}
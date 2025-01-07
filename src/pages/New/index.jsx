import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/Noteitem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links Úteis" >
            <NoteItem value="https://rocketseat.com" />
            <NoteItem placeholder="Novo link" isNew/>
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
import { useCallback, useEffect, useState } from 'react';

import { InputMask } from '@react-input/mask';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import {
  Container,
  Content,
  CurrencyInput,
  InputGroup,
  RadioForm,
  RadioGroup,
} from './styles';

export function CreateTransactionDialog() {
  const { categories, fetchCategories } = useFetchAPI();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const onSubmit = useCallback(() => {
    handleClose();
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova transação</Button>}
    >
      <Container>
        <Title
          title="Nova Trasação"
          subtitle="Crie uma nova transação para seu controle financeiro"
        />

        <form>
          <Content>
            <InputGroup>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label>Categoria</label>
              <select>
                <option value="null">Selecione uma Categoria</option>
                {categories?.length &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </select>
            </InputGroup>
            <Input label="Nome" placeholder="Nome da transação..." />
            <InputGroup>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label>Valor</label>
              <CurrencyInput
                placeholder="R$ 0,00"
                format="currency"
                currency="BRL"
              />
            </InputGroup>
            <InputMask
              component={Input}
              mask="dd/mm/aaaa"
              replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
              label="Data"
              variant="black"
              placeholder="dd/mm/aaaa"
            />

            <RadioForm>
              <RadioGroup>
                <input type="radio" id="income" value="income" name="type" />
                <label htmlFor="income">Receita</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="expense" value="expense" name="type" />
                <label htmlFor="expense">Gasto</label>
              </RadioGroup>
            </RadioForm>
          </Content>

          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancelar
            </Button>
            <Button onClick={onSubmit} type="button">
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}

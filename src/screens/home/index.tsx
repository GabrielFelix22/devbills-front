import { InputMask } from '@react-input/mask';
import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { Dialog } from '../../components/dialog';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Transaciton } from '../../components/transaction';
import {
  Aside,
  Balance,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransactions,
  Section,
  TransactionGroup,
} from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Dialog trigger={<Button>Nova Transação</Button>}>Olá</Dialog>
          <Button>Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria do periodo"
              />
            </header>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <ChartContent></ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title
                title="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </ChartAction>
            </header>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transações" subtitle="Receitas e Gastos no período" />
            <SearchTransactions>
              <Input variant="black" placeholder="Procurar transação..." />
              <ButtonIcon />
            </SearchTransactions>
          </header>
          <TransactionGroup>
            <Transaciton
              id={1}
              amount={20000}
              date="22/08/2024"
              category={{ title: 'ALIMENTAÇÃO', color: '#FF33BB' }}
              title="Mercado"
            />
            <Transaciton
              id={1}
              amount={20000}
              date="22/08/2024"
              category={{ title: 'ALIMENTAÇÃO', color: '#FF33BB' }}
              title="Shopping"
            />
            <Transaciton
              id={1}
              amount={20000}
              date="22/08/2024"
              category={{ title: 'ALIMENTAÇÃO', color: '#FF33BB' }}
              title="Compras"
            />
            <Transaciton
              id={1}
              amount={20000}
              date="22/08/2024"
              category={{ title: 'ALIMENTAÇÃO', color: '#FF33BB' }}
              title="Roupas"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  );
}

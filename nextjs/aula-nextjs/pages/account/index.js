import { getLayout } from "../../components/layout/multipleFn/AccountLayout";

export default function PageAccount() {
  return (
    <div>
      <h1>Conta do usuário</h1>
      <p>Conteúdo da página do usuário.</p>
    </div>
  );
}

PageAccount.getLayout = getLayout;

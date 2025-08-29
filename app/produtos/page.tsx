import { Suspense } from 'react';
import ClientProdutos from './ClientProdutos';
export default function Page() {
  return (
    <Suspense fallback={<div>Carregando produtos…</div>}>
      <ClientProdutos />
    </Suspense>
  );
}

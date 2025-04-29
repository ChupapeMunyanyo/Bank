import React, { memo } from 'react';
import Header from '../project1/src/components/Header'
import ContractInteraction from '../project1/src/components/Contract';
import SubgraphInfo from '../project1/src/components/SubgraphInfo';
import GraphQLQuery from '../project1/src/components/GraphQL';
import './styles.css';
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="section">
          <ContractInteraction />
        </section>
        <section className="section">
          <SubgraphInfo />
        </section>
        <section className="section">
          <GraphQLQuery />
        </section>
      </main>
    </div>
  );
};

export default memo(App);
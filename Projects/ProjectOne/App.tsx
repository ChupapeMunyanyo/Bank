import React, { memo } from 'react';
import Header from '../ProjectOne/src/components/Header'
import ContractInteraction from '../ProjectOne/src/components/Contract';
import SubgraphInfo from '../ProjectOne/src/components/SubgraphInfo';
import GraphQLQuery from '../ProjectOne/src/components/GraphQL'
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
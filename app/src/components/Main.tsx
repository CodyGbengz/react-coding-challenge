import React, { useState } from "react";
import styled from "styled-components";

import { useItems } from "../hooks/useItems";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { Spinner } from './Spinner';
import { ErrorBanner } from "./ErrorBanner";

const Section = styled.section`
  outline: none;
  padding: 3%;

  input {
    height: 2em;
    margin: 10px 0;
    width: 99.5%;
  }
`;

export const Main: React.FC = (): any => {
  const { 
      items,
      handleFilter,
      sortItems,
      sortDirection,
      handleClose,
      selectedItem,
      toggleModal,
      filterTerm,
      updateStatus,
      loading,
      error
    } = useItems();

  return (
    <Section
        tabIndex={0}
        onClick={() => selectedItem && handleClose()}
        onKeyDown={event => {
            if (event.key === 'Escape') handleClose()}}
    >
      <input
        type="text"
        onChange={(
            event
            ) => handleFilter(event.target.value.toLowerCase()
        )}
        value={filterTerm}
        placeholder="Enter keyword to filter by name"
      />
      <Table
        sortDirection={sortDirection}
        items={items}
        sortItems={sortItems}
        selectItem={toggleModal}
        filterTerm={filterTerm}
      />
      {selectedItem &&
      <Modal 
        item={selectedItem}
        onClose={handleClose}
        handleSelectStatus={updateStatus}
      />}
      {loading && <Spinner />}
      {error && <ErrorBanner message={error}/>}
    </Section>
  );
};

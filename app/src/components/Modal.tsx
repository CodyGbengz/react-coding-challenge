import React from "react";
import styled from "styled-components";

import useTheme from "../hooks/useTheme";

const StyledModal = styled.section`
  border: 1px solid black;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
  justify-content: space-between;
  padding: 4%;
  position: absolute;
  top: 0px;
  width: 85%;

  .imageWrapper {
    width: 45%;
  }

  .textWrapper {
    width: 45%;
  }
`;

const StyledOption = styled.option`
  text-align: center;
  width: 100px;
`;

export interface ModalProps {
    item: IItem;
    onClose: () => void;
    handleSelectStatus: (data: IItem) => void;
}

export const Modal: React.FC<ModalProps> = ({ item, handleSelectStatus }) => {
  const { theme } = useTheme();
  const statuses = ["error", "new", "processing", "done"];

  return item ? (
    <StyledModal onClick={(event) => event.stopPropagation()} theme={theme}>
      <div className="imageWrapper">
        <img
          src={item.image || "http://via.placeholder.com/300"}
          alt="image description"
        />
      </div>
      <div className="textWrapper">
        <h4>{item.name}</h4>
        <span>
          <select
            onChange={(event) =>
              handleSelectStatus({
                ...item,
                status: event.target.value as TItemStatus,
              })
            }
            name="status"
            id="status"
            defaultValue={item.status}
          >
            {statuses.map((status) => (
              <StyledOption
                key={status}
                value={status}
              >
                {status}
              </StyledOption>
            ))}
          </select>
        </span>
      </div>
    </StyledModal>
  ) : null;
};

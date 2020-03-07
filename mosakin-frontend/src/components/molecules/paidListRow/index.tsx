import React from "react";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import {
  paidTimeTypeToString,
  PaidListRowViewModel
} from "@/models/models/paidList";
import dayjs from "dayjs";

const StyledTableRow = styled.tr`
  border-bottom: solid 1px ${paletteDict.border};
`;

const StyledTableData = styled.td`
  font-family: inter;
  /* transform: translateY(5px); */
  padding: 0 14px;
  @media (max-width: 480px) {
    padding: inherit;
  }
  text-align: center;
`;

const StyledTableDataIcon = styled.td`
  line-height: 0;
  padding: 0 14px;
  text-align: center;
  &:active {
    background-color: ${paletteDict.light};
  }
  border-radius: 2px;
  cursor: pointer;
`;

const TextWithLineHeight = styled(Text)`
  line-height: 34px;
`;

const StyledTableHead = styled.th`
  font-family: inter;
  line-height: 34px;
  font-weight: initial;
  padding: 0 14px;
  text-align: center;
  /* FIXME min-widthってどうよ */
  min-width: 160px;
  @media (max-width: 480px) {
    min-width: inherit;
  }
`;

const StyledTableMenuHead = styled.th`
  font-family: inter;
  line-height: 34px;
  font-weight: initial;
  text-align: center;
  /* FIXME min-widthってどうよ */
  min-width: 100px;
  @media (max-width: 480px) {
    min-width: inherit;
  }
`;

export const PaidListRow: React.FC<PaidListRowViewModel> = ({ paid, menu }) => (
  <StyledTableRow>
    <StyledTableData>
      <TextWithLineHeight color="1" size="0">
        {dayjs(paid.paidAcquisitionDate).format(
          "YYYY/MM/DD"
        ) /* FIXME: 後々共通化等したい*/}
      </TextWithLineHeight>
    </StyledTableData>
    <StyledTableData>
      <TextWithLineHeight color="1" size="0">
        {paidTimeTypeToString[paid.paidTimeType]}
      </TextWithLineHeight>
    </StyledTableData>
    <StyledTableDataIcon onClick={menu.onEditButtonClick}>
      <Icon name="pencilThin" width="s" height="s"></Icon>
    </StyledTableDataIcon>
    <StyledTableDataIcon onClick={menu.onDeleteButtonClick}>
      <Icon name="xMark" width="s" height="s"></Icon>
    </StyledTableDataIcon>
  </StyledTableRow>
);

export const PaidListHeader: React.FC = () => (
  <tr>
    <StyledTableHead>
      <Text color="3" size="1">
        取得日
      </Text>
    </StyledTableHead>
    <StyledTableHead>
      <Text color="3" size="1">
        取得種別
      </Text>
    </StyledTableHead>
    <StyledTableMenuHead>
      <Text color="3" size="1">
        編集
      </Text>
    </StyledTableMenuHead>
    <StyledTableMenuHead>
      <Text color="3" size="1">
        削除
      </Text>
    </StyledTableMenuHead>
  </tr>
);

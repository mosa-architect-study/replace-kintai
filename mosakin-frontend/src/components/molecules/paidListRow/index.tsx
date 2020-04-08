import React from "react";
import styled from "@emotion/styled";
import { paletteDict, bp } from "@/common/theme";
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
  padding: 16px 14px 0 14px;
  @media (max-width: ${bp}) {
    padding: 24px 0 0;
  }
  text-align: center;
`;

const StyledTableDataIcon = styled.td`
  line-height: 14px;
  padding: 0 14px;
  vertical-align: bottom;
  text-align: center;
  &:active {
    background-color: ${paletteDict.light};
  }
  border-radius: 2px;
  cursor: pointer;
`;

const TextWithLineHeight = styled(Text)`
  line-height: 34px;
  color: ${paletteDict.black};
`;

const StyledTableHead = styled.th`
  font-family: inter;
  line-height: 34px;
  font-weight: initial;
  padding: 0 14px;
  text-align: center;
  color: ${paletteDict.base};
  /* FIXME min-widthってどうよ */
  min-width: 160px;
  @media (max-width: ${bp}) {
    min-width: inherit;
  }
`;

const StyledTableMenuHead = styled.th`
  font-family: inter;
  line-height: 34px;
  font-weight: initial;
  text-align: center;
  color: ${paletteDict.base};
  /* FIXME min-widthってどうよ */
  min-width: 100px;
  @media (max-width: ${bp}) {
    min-width: inherit;
  }
`;

export const PaidListRow: React.FC<PaidListRowViewModel> = ({ paid, menu }) => (
  <StyledTableRow>
    <StyledTableData>
      <TextWithLineHeight size="1">
        {dayjs(paid.paidAcquisitionDate).format(
          "YYYY/MM/DD"
        ) /* FIXME: 後々共通化等したい*/}
      </TextWithLineHeight>
    </StyledTableData>
    <StyledTableData>
      <TextWithLineHeight size="1">
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
      <Text size="1">取得日</Text>
    </StyledTableHead>
    <StyledTableHead>
      <Text size="1">取得種別</Text>
    </StyledTableHead>
    <StyledTableMenuHead>
      <Text size="1">編集</Text>
    </StyledTableMenuHead>
    <StyledTableMenuHead>
      <Text size="1">削除</Text>
    </StyledTableMenuHead>
  </tr>
);
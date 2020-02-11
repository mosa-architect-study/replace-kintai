import React from "react";
import styled from "@emotion/styled";
import { paletteDict } from "@/common/theme";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import { PaidListItem, paidTimeTypeToString } from "@/models/models/paidList";
import dayjs from "dayjs";

const StyledTableRow = styled.tr`
  border-bottom: solid 1px ${paletteDict.border};
`;

const StyledTableData = styled.td`
  font-family: inter;
  /* transform: translateY(5px); */
  padding: 0 14px;
  text-align: center;
`;

const StyledTableDataIcon = styled.td`
  line-height: 0;
  padding: 0 14px;
  text-align: center;
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
  min-width: 100px;
`;

export type PaidListRowProps = PaidListItem;

export const PaidListRow: React.FC<PaidListRowProps> = ({
  paidAcquisitionDate,
  paidTimeType
}) => (
  <StyledTableRow>
    <StyledTableData>
      <TextWithLineHeight color="1" size="2">
        {dayjs(paidAcquisitionDate).format(
          "YYYY/MM/DD"
        ) /* FIXME: 後々共通化等したい*/}
      </TextWithLineHeight>
    </StyledTableData>
    <StyledTableData>
      <TextWithLineHeight color="1" size="2">
        {paidTimeTypeToString[paidTimeType]}
      </TextWithLineHeight>
    </StyledTableData>
    <StyledTableDataIcon>
      <Icon name="pencilThin" width="m" height="m"></Icon>
    </StyledTableDataIcon>
    <StyledTableDataIcon>
      <Icon name="xMark" width="m" height="m"></Icon>
    </StyledTableDataIcon>
  </StyledTableRow>
);

export const PaidListHeader: React.FC = () => (
  <tr>
    <StyledTableHead>
      <Text color="3" size="2">
        有給取得日
      </Text>
    </StyledTableHead>
    <StyledTableHead>
      <Text color="3" size="2">
        有給取得種別
      </Text>
    </StyledTableHead>
    <StyledTableHead>
      <Text color="3" size="2">
        編集
      </Text>
    </StyledTableHead>
    <StyledTableHead>
      <Text color="3" size="2">
        削除
      </Text>
    </StyledTableHead>
  </tr>
);

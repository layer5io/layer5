import React from "react";
import styled from "styled-components";

const Dimensions = ["", "8.333333%", "16.666667%", "25%", "33.333333%", "41.666667%", "50%", "58.333333%", "66.666667%", "75%", "83.333333%", "91.666667%", "100%"];

const ColWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 315px) {
        flex: ${({ xs }) =>
  (xs === 1 && `0 0 ${Dimensions[1]}`) ||
            (xs === 2 && `0 0 ${Dimensions[2]}`) ||
            (xs === 3 && `0 0 ${Dimensions[3]}`) ||
            (xs === 4 && `0 0 ${Dimensions[4]}`) ||
            (xs === 5 && `0 0 ${Dimensions[5]}`) ||
            (xs === 6 && `0 0 ${Dimensions[6]}`) ||
            (xs === 7 && `0 0 ${Dimensions[7]}`) ||
            (xs === 8 && `0 0 ${Dimensions[8]}`) ||
            (xs === 9 && `0 0 ${Dimensions[9]}`) ||
            (xs === 10 && `0 0 ${Dimensions[10]}`) ||
            (xs === 11 && `0 0 ${Dimensions[11]}`) ||
            (xs === 12 && `0 0 ${Dimensions[12]}`)
};
        max-width: ${({ xs }) =>
  (xs === 1 && Dimensions[1]) ||
            (xs === 2 && Dimensions[2]) ||
            (xs === 3 && Dimensions[3]) ||
            (xs === 4 && Dimensions[4]) ||
            (xs === 5 && Dimensions[5]) ||
            (xs === 6 && Dimensions[6]) ||
            (xs === 7 && Dimensions[7]) ||
            (xs === 8 && Dimensions[8]) ||
            (xs === 9 && Dimensions[9]) ||
            (xs === 10 && Dimensions[10]) ||
            (xs === 11 && Dimensions[11]) ||
            (xs === 12 && Dimensions[12])
};

        margin-left: ${props =>
  props.offsetXs ?
    (props.offsetXs === 1 && `${Dimensions[1]}`) ||
            (props.offsetXs === 2 && `${Dimensions[2]}`) ||
            (props.offsetXs === 3 && `${Dimensions[3]}`) ||
            (props.offsetXs === 4 && `${Dimensions[4]}`) ||
            (props.offsetXs === 5 && `${Dimensions[5]}`) ||
            (props.offsetXs === 6 && `${Dimensions[6]}`) ||
            (props.offsetXs === 7 && `${Dimensions[7]}`) ||
            (props.offsetXs === 8 && `${Dimensions[8]}`) ||
            (props.offsetXs === 9 && `${Dimensions[9]}`) ||
            (props.offsetXs === 10 && `${Dimensions[10]}`) ||
            (props.offsetXs === 11 && `${Dimensions[11]}`)
    : `${Dimensions[0]}`}

    }/* @media (min-width: 315px) */

    @media (min-width: 576px) {

        order: ${({ order }) =>
      (order === 1 && "2") ||
            (order === 2 && "1")
};

        flex: ${({ sm }) =>
  (sm === 1 && `0 0 ${Dimensions[1]}`) ||
            (sm === 2 && `0 0 ${Dimensions[2]}`) ||
            (sm === 3 && `0 0 ${Dimensions[3]}`) ||
            (sm === 4 && `0 0 ${Dimensions[4]}`) ||
            (sm === 5 && `0 0 ${Dimensions[5]}`) ||
            (sm === 6 && `0 0 ${Dimensions[6]}`) ||
            (sm === 7 && `0 0 ${Dimensions[7]}`) ||
            (sm === 8 && `0 0 ${Dimensions[8]}`) ||
            (sm === 9 && `0 0 ${Dimensions[9]}`) ||
            (sm === 10 && `0 0 ${Dimensions[10]}`) ||
            (sm === 11 && `0 0 ${Dimensions[11]}`) ||
            (sm === 12 && `0 0 ${Dimensions[12]}`)
};
        max-width: ${({ sm }) =>
  (sm === 1 && Dimensions[1]) ||
            (sm === 2 && Dimensions[2]) ||
            (sm === 3 && Dimensions[3]) ||
            (sm === 4 && Dimensions[4]) ||
            (sm === 5 && Dimensions[5]) ||
            (sm === 6 && Dimensions[6]) ||
            (sm === 7 && Dimensions[7]) ||
            (sm === 8 && Dimensions[8]) ||
            (sm === 9 && Dimensions[9]) ||
            (sm === 10 && Dimensions[10]) ||
            (sm === 11 && Dimensions[11]) ||
            (sm === 12 && Dimensions[12])
};

        margin-left: ${props =>
  props.offsetSm ?
    (props.offsetSm === 1 && `${Dimensions[1]}`) ||
            (props.offsetSm === 2 && `${Dimensions[2]}`) ||
            (props.offsetSm === 3 && `${Dimensions[3]}`) ||
            (props.offsetSm === 4 && `${Dimensions[4]}`) ||
            (props.offsetSm === 5 && `${Dimensions[5]}`) ||
            (props.offsetSm === 6 && `${Dimensions[6]}`) ||
            (props.offsetSm === 7 && `${Dimensions[7]}`) ||
            (props.offsetSm === 8 && `${Dimensions[8]}`) ||
            (props.offsetSm === 9 && `${Dimensions[9]}`) ||
            (props.offsetSm === 10 && `${Dimensions[10]}`) ||
            (props.offsetSm === 11 && `${Dimensions[11]}`)
    : `${Dimensions[0]}`}

    }/* @media (min-width: 576px) */

    @media (min-width: 768px) {
        order: ${({ order }) =>
      (order === 1 && "1") ||
            (order === 2 && "2")
};
        flex: ${({ md }) =>
  (md === 1 && `0 0 ${Dimensions[1]}`) ||
            (md === 2 && `0 0 ${Dimensions[2]}`) ||
            (md === 3 && `0 0 ${Dimensions[3]}`) ||
            (md === 4 && `0 0 ${Dimensions[4]}`) ||
            (md === 5 && `0 0 ${Dimensions[5]}`) ||
            (md === 6 && `0 0 ${Dimensions[6]}`) ||
            (md === 7 && `0 0 ${Dimensions[7]}`) ||
            (md === 8 && `0 0 ${Dimensions[8]}`) ||
            (md === 9 && `0 0 ${Dimensions[9]}`) ||
            (md === 10 && `0 0 ${Dimensions[10]}`) ||
            (md === 11 && `0 0 ${Dimensions[11]}`) ||
            (md === 12 && `0 0 ${Dimensions[12]}`)
};

        max-width: ${({ md }) =>
  (md === 1 && `${Dimensions[1]}`) ||
            (md === 2 && `${Dimensions[2]}`) ||
            (md === 3 && `${Dimensions[3]}`) ||
            (md === 4 && `${Dimensions[4]}`) ||
            (md === 5 && `${Dimensions[5]}`) ||
            (md === 6 && `${Dimensions[6]}`) ||
            (md === 7 && `${Dimensions[7]}`) ||
            (md === 8 && `${Dimensions[8]}`) ||
            (md === 9 && `${Dimensions[9]}`) ||
            (md === 10 && `${Dimensions[10]}`) ||
            (md === 11 && `${Dimensions[11]}`) ||
            (md === 12 && `${Dimensions[12]}`)
};

        margin-left: ${props =>
  props.offsetMd ?
    (props.offsetMd === 1 && `${Dimensions[1]}`) ||
            (props.offsetMd === 2 && `${Dimensions[2]}`) ||
            (props.offsetMd === 3 && `${Dimensions[3]}`) ||
            (props.offsetMd === 4 && `${Dimensions[4]}`) ||
            (props.offsetMd === 5 && `${Dimensions[5]}`) ||
            (props.offsetMd === 6 && `${Dimensions[6]}`) ||
            (props.offsetMd === 7 && `${Dimensions[7]}`) ||
            (props.offsetMd === 8 && `${Dimensions[8]}`) ||
            (props.offsetMd === 9 && `${Dimensions[9]}`) ||
            (props.offsetMd === 10 && `${Dimensions[10]}`) ||
            (props.offsetMd === 11 && `${Dimensions[11]}`)
    : `${Dimensions[0]}`}

    } /*  @media (min-width: 768px)  */

    @media (min-width: 992px) {
        flex: ${({ lg }) =>
      (lg === 1 && `0 0 ${Dimensions[1]}`) ||
            (lg === 2 && `0 0 ${Dimensions[2]}`) ||
            (lg === 3 && `0 0 ${Dimensions[3]}`) ||
            (lg === 4 && `0 0 ${Dimensions[4]}`) ||
            (lg === 5 && `0 0 ${Dimensions[5]}`) ||
            (lg === 6 && `0 0 ${Dimensions[6]}`) ||
            (lg === 7 && `0 0 ${Dimensions[7]}`) ||
            (lg === 8 && `0 0 ${Dimensions[8]}`) ||
            (lg === 9 && `0 0 ${Dimensions[9]}`) ||
            (lg === 10 && `0 0 ${Dimensions[10]}`) ||
            (lg === 11 && `0 0 ${Dimensions[11]}`) ||
            (lg === 12 && `0 0 ${Dimensions[12]}`)
};
        max-width: ${({ lg }) =>
  (lg === 1 && `${Dimensions[1]}`) ||
            (lg === 2 && `${Dimensions[2]}`) ||
            (lg === 3 && `${Dimensions[3]}`) ||
            (lg === 4 && `${Dimensions[4]}`) ||
            (lg === 5 && `${Dimensions[5]}`) ||
            (lg === 6 && `${Dimensions[6]}`) ||
            (lg === 7 && `${Dimensions[7]}`) ||
            (lg === 8 && `${Dimensions[8]}`) ||
            (lg === 9 && `${Dimensions[9]}`) ||
            (lg === 10 && `${Dimensions[10]}`) ||
            (lg === 11 && `${Dimensions[11]}`) ||
            (lg === 12 && `${Dimensions[12]}`)
};

        margin-left: ${props =>
  props.offsetLg ?
    (props.offsetLg === 1 && `${Dimensions[1]}`) ||
            (props.offsetLg === 2 && `${Dimensions[2]}`) ||
            (props.offsetLg === 3 && `${Dimensions[3]}`) ||
            (props.offsetLg === 4 && `${Dimensions[4]}`) ||
            (props.offsetLg === 5 && `${Dimensions[5]}`) ||
            (props.offsetLg === 6 && `${Dimensions[6]}`) ||
            (props.offsetLg === 7 && `${Dimensions[7]}`) ||
            (props.offsetLg === 8 && `${Dimensions[8]}`) ||
            (props.offsetLg === 9 && `${Dimensions[9]}`) ||
            (props.offsetLg === 10 && `${Dimensions[10]}`) ||
            (props.offsetLg === 11 && `${Dimensions[11]}`)
    : `${Dimensions[0]}`}

    } /*  @media (min-width: 992px)  */

    @media (min-width: 1200px) {
        flex: ${({ xl }) =>
      (xl === 2 && `0 0 ${Dimensions[2]}`) ||
            (xl === 1 && `0 0 ${Dimensions[1]}`) ||
            (xl === 3 && `0 0 ${Dimensions[3]}`) ||
            (xl === 4 && `0 0 ${Dimensions[4]}`) ||
            (xl === 5 && `0 0 ${Dimensions[5]}`) ||
            (xl === 6 && `0 0 ${Dimensions[6]}`) ||
            (xl === 7 && `0 0 ${Dimensions[7]}`) ||
            (xl === 8 && `0 0 ${Dimensions[8]}`) ||
            (xl === 9 && `0 0 ${Dimensions[9]}`) ||
            (xl === 10 && `0 0 ${Dimensions[10]}`) ||
            (xl === 11 && `0 0 ${Dimensions[11]}`) ||
            (xl === 12 && `0 0 ${Dimensions[12]}`)
};
        max-width: ${({ xl }) =>
  (xl === 1 && `${Dimensions[1]}`) ||
            (xl === 2 && `${Dimensions[2]}`) ||
            (xl === 3 && `${Dimensions[3]}`) ||
            (xl === 4 && `${Dimensions[4]}`) ||
            (xl === 5 && `${Dimensions[5]}`) ||
            (xl === 6 && `${Dimensions[6]}`) ||
            (xl === 7 && `${Dimensions[7]}`) ||
            (xl === 8 && `${Dimensions[8]}`) ||
            (xl === 9 && `${Dimensions[9]}`) ||
            (xl === 10 && `${Dimensions[10]}`) ||
            (xl === 11 && `${Dimensions[11]}`) ||
            (xl === 12 && `${Dimensions[12]}`)
};

        margin-left: ${props =>
  props.offsetXl ?
    (props.offsetXl === 1 && `${Dimensions[1]}`) ||
            (props.offsetXl === 2 && `${Dimensions[2]}`) ||
            (props.offsetXl === 3 && `${Dimensions[3]}`) ||
            (props.offsetXl === 4 && `${Dimensions[4]}`) ||
            (props.offsetXl === 5 && `${Dimensions[5]}`) ||
            (props.offsetXl === 6 && `${Dimensions[6]}`) ||
            (props.offsetXl === 7 && `${Dimensions[7]}`) ||
            (props.offsetXl === 8 && `${Dimensions[8]}`) ||
            (props.offsetXl === 9 && `${Dimensions[9]}`) ||
            (props.offsetXl === 10 && `${Dimensions[10]}`) ||
            (props.offsetXl === 11 && `${Dimensions[11]}`)
    : `${Dimensions[0]}`}

    } /*  @media (min-width: 1200px)  */
`;

const Col = ({ children, ...props }) => {
  const addAllClasses = ["col"];
  if (props.className){
    addAllClasses.push(props.className);
  }
  return (
    <ColWrapper {...props} className={addAllClasses.join(" ")}>
      {children}
    </ColWrapper>
  );
};

export default Col;
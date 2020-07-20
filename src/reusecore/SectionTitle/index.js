import React from 'react';
import styled, {css} from 'styled-components'


const TitleWrap = styled.div`
margin-left: auto;
margin-right: auto;
width: 40%;
text-align: center;

${props => (props.rightAlign && css (
    {
    "text-align": 'right'
    }
))}
${props => (props.leftAlign && css (
    {
    "text-align": 'left'
    }
))}
${props => (props.UniWidth && css (
    {
    "width": props.UniWidth
    }
))}

h4{
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.textColor ? props.theme.textColor : '#7A848E'};
    margin: 0 0 16px 0;
}
h2{
    font-size: 40px;
    font-weight: 300;
    line-height: 50px;
    color: ${props => props.theme.headingColor ? props.theme.headingColor : '#2C0075'};
    margin: 0 0 75px 0;
    span{
        font-weight: 600;
    }
}
@media only screen and (max-width: 912px) {
    width: 100%;
    h2{
        font-size: 24px;
        line-height: 35px;
    }
    .section-title h2{
        margin-bottom: 20px;
    }
}
`
const SectionTitle = ({ children, ...props }) => {

  return (
    <TitleWrap {...props}>
        {children}
    </TitleWrap>
  );
};

export default SectionTitle;

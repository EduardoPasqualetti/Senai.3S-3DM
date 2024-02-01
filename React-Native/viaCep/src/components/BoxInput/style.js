import styled from 'styled-components'

// componente que contem a balbel + input
export const FieldContent = styled.View`

    /* define o valor da largurra como o valor da -moz-context-properties.fieldWidth */
    width: ${props => `${props.fieldWidth}%`};

    gap: 15px;
    
`
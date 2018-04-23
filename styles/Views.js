import styled from 'styled-components';

// THIS IS THE CONTAINER THAT WRAPS EACH ENTIRE COMOPONENT
export const MainContainer = styled.View`
    background: #efeff4;
    width: 100%;
    height: 100%
`
// #efeff4 - light blue, 4D3D2D brown, #007aff main blue, #084598 bold blue, #0d6017 main green, #03380e dark

// THIS IS THE BIG WHITE BOX CONTAINER THAT WRAPS MOST OF THE DISPLAYED DATA
export const DetailViewContainer = styled.View`
    min-height: 80;
    max-height: 400;
    borderRadius: 10;
    backgroundColor: #fff;
    borderWidth: 1;
    borderColor: #007aff;
    marginLeft: 35;
    marginRight: 35;
    marginTop: 10px;
    boxShadow: 2px 2px;
    shadow-color: #000;
    shadowOpacity: .5;
    shadowRadius: 2;
    overflow: scroll;
`

// USED INSIDE THE DETAIL VIEW CONTAINER INSIDE THE ORDER CONFIRM COMPONENT
export const AccountDetailsView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
// USED IN THE HISTORY COMPONENT INSIDE THE DETAIL VIEW CONTAINER - WRAPPING THE HISTORY TEXTS
export const ColumnContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 0px;
    justify-content: space-around;
    align-items: center;
`
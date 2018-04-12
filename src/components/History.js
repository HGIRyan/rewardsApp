import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, SectionList, ListItem,ITEM_HEIGHT} from 'react-native';
import { connect } from 'react-redux';

import { getUserInfo } from '../../ducks/reducer';
import { MainHeading, SubHeading, BoldText } from '../../styles/Texts';
import { MainContainer, DetailViewContainer, ColumnContainer } from '../../styles/Views';



class History extends Component {
 
    render() {
        const user = this.props.user
        var options = { month: 'long', day: 'numeric' , year: 'numeric'  };

        return (
            <MainContainer>
                <MainHeading style={styles.topMargin} >
                    Order History
            </MainHeading>
                <DetailViewContainer>
                    <ScrollView>
                        <ColumnContainer>
                            <BoldText>Order Date</BoldText>   
                            <BoldText style={{marginLeft: 40}} >Total</BoldText>   
                            <BoldText>Points</BoldText>
                        </ColumnContainer>                  
                    {user.orders.map((order, i) => {
                        return (

                    //          <FlatList
                    //          numColumns ={3}
                    //     data={[
                    //         { key: user.orders[i].orderdate },
                    //         { key: user.orders[0].total },
                    //         { key: parseInt(user.orders[0].orderdate) }
                    //     ]}
                    //     renderItem={({ item }) => <SubHeading>{item.key}</SubHeading>}
                    //     // renderItem={this.renderItem}
                    // />
                    <ColumnContainer key={i}>
                            <SubHeading>
                                {new Date(order.orderdate.slice(0,10).split('-').join(',')).toLocaleDateString('en-us', options)}
                            </SubHeading>
                            <SubHeading>
                             {order.total}   
                             </SubHeading>
                            <SubHeading>
                             {parseInt(order.total.slice(1,8))}
                             </SubHeading>
                    </ColumnContainer>
                            
                            
                        )
                    })}


                   </ScrollView> 
                </DetailViewContainer>
            </MainContainer>

        )

    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(History);

const styles = {
    topMargin: {
        marginTop: 60
    }
}

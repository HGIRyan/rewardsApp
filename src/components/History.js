import React, { Component } from 'react';
import { View, Text, FlatList, SectionList, ListItem,ITEM_HEIGHT} from 'react-native';
import { connect } from 'react-redux';

import { getUserInfo } from '../../ducks/reducer';
import { MainHeading, SubHeading } from '../../styles/Texts';
import { MainContainer, DetailViewContainer } from '../../styles/Views';



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
                    <SubHeading>orderdate   total   Points </SubHeading>
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
                    
                    <SubHeading key={i} >{new Date(order.orderdate.slice(0,10).split('-').join(',')).toLocaleDateString('en-us', options)}  {order.total}   {parseInt(order.total.slice(1,8))}</SubHeading>
                            
                            
                        )
                    })}


                   
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

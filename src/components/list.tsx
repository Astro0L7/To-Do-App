import { FlatList, View, StyleSheet } from 'react-native';
import Task from './task';
import Checkbox from './checkbox';
import Label from './label';

export default function List(props) {
    console.log(props.tasks);

    return (    
        <View style={styles.listStyle}>    
            <FlatList 
                data={props.tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({item: task}) => ( 
                    <Task>
                        <Checkbox /><Label>{task.text}</Label>
                    </Task>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 30,
        // backgroundColor: 'rgba(247, 194, 227, 1)', // cor para visualizar limites do layout
    }
})
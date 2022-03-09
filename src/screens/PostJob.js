import React from 'react';
import {
    TextInput,
    Button,
    RadioButton,
} from 'react-native-paper';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

const PostJob = () => {
    const [checked, setChecked] = React.useState('first');


    return (
        <ScrollView>
            <View style={styles.main}>
                <TextInput style={styles.txtfield}
                    label="Name....."
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Address"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Field"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Contact"
                    mode='outlined'
                />
                <TextInput style={styles.txtfield}
                    label="Email"
                    mode='outlined'
                />

                <TextInput style={styles.txtfield}
                    label="Ranking"
                    mode='outlined'
                />

                

                <Button style={{ marginTop: 30, padding: 10 }} mode="contained" onPress={() => console.log('Pressed')}>
                    submit
                </Button>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtfield: {
        marginTop: 20
    },
    main: {
        padding: 40,
        marginBottom: 30,
    },
    male: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    gander:{
        marginTop: 20,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'

    }


});


export default PostJob